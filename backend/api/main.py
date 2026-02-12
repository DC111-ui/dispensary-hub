import base64
import json
import os
import sqlite3
import uuid
from contextlib import contextmanager
from datetime import datetime, timezone
from typing import Any

from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel, Field


DB_PATH = os.getenv("DB_PATH", os.path.join(os.path.dirname(__file__), "app.db"))
WRITE_METHODS = {"POST", "PUT", "PATCH", "DELETE"}


app = FastAPI(title="Dispensary Hub API")


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat()


@contextmanager
def db_conn():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
        conn.commit()
    finally:
        conn.close()


def init_db() -> None:
    with db_conn() as conn:
        conn.executescript(
            """
            CREATE TABLE IF NOT EXISTS members (
              id TEXT PRIMARY KEY,
              member_number TEXT NOT NULL UNIQUE,
              first_name TEXT NOT NULL,
              last_name TEXT NOT NULL,
              date_of_birth TEXT,
              phone TEXT,
              email TEXT,
              status TEXT NOT NULL DEFAULT 'PENDING',
              created_at TEXT NOT NULL,
              updated_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS member_verifications (
              id TEXT PRIMARY KEY,
              member_id TEXT NOT NULL,
              outcome TEXT NOT NULL,
              verified_by_staff_id TEXT NOT NULL,
              notes TEXT,
              document_ref TEXT,
              verified_at TEXT NOT NULL,
              created_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS suppliers (
              id TEXT PRIMARY KEY,
              name TEXT NOT NULL,
              code TEXT NOT NULL UNIQUE,
              contact_name TEXT,
              contact_email TEXT,
              contact_phone TEXT,
              address TEXT,
              is_active INTEGER NOT NULL DEFAULT 1,
              created_at TEXT NOT NULL,
              updated_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS products (
              id TEXT PRIMARY KEY,
              sku TEXT NOT NULL UNIQUE,
              name TEXT NOT NULL,
              description TEXT,
              unit_of_measure TEXT NOT NULL,
              is_active INTEGER NOT NULL DEFAULT 1,
              created_at TEXT NOT NULL,
              updated_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS inventory_movements (
              id TEXT PRIMARY KEY,
              product_id TEXT NOT NULL,
              movement_type TEXT NOT NULL,
              quantity REAL NOT NULL,
              reason TEXT,
              recorded_by_staff_id TEXT NOT NULL,
              occurred_at TEXT NOT NULL,
              created_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS orders (
              id TEXT PRIMARY KEY,
              member_id TEXT NOT NULL,
              order_number TEXT NOT NULL UNIQUE,
              status TEXT NOT NULL DEFAULT 'PLACED',
              ordered_by_staff_id TEXT NOT NULL,
              ordered_at TEXT NOT NULL,
              completed_at TEXT,
              notes TEXT,
              created_at TEXT NOT NULL,
              updated_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS order_items (
              id TEXT PRIMARY KEY,
              order_id TEXT NOT NULL,
              product_id TEXT NOT NULL,
              quantity REAL NOT NULL,
              unit_price REAL NOT NULL,
              created_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS audit_events (
              id TEXT PRIMARY KEY,
              actor_type TEXT NOT NULL,
              actor_id TEXT,
              event_type TEXT NOT NULL,
              entity_type TEXT NOT NULL,
              entity_id TEXT NOT NULL,
              event_data TEXT NOT NULL,
              occurred_at TEXT NOT NULL,
              created_at TEXT NOT NULL
            );
            """
        )


@app.on_event("startup")
def startup() -> None:
    init_db()


def row_to_dict(row: sqlite3.Row | None) -> dict[str, Any] | None:
    return dict(row) if row else None


def parse_staff_id(request: Request) -> str:
    explicit_staff = request.headers.get("x-staff-id")
    if explicit_staff:
        return explicit_staff

    auth = request.headers.get("authorization", "")
    if auth.lower().startswith("bearer "):
        token = auth.split(" ", 1)[1]
        parts = token.split(".")
        if len(parts) >= 2:
            try:
                payload_raw = parts[1] + "=" * (-len(parts[1]) % 4)
                payload = json.loads(base64.urlsafe_b64decode(payload_raw.encode()).decode())
                return payload.get("sub") or payload.get("username") or "unknown"
            except Exception:
                return "unknown"

    return "unknown"


async def body_as_text(request: Request) -> str:
    raw = await request.body()

    async def receive() -> dict[str, Any]:
        return {"type": "http.request", "body": raw, "more_body": False}

    request._receive = receive
    return raw.decode("utf-8", errors="replace")


@app.middleware("http")
async def audit_write_middleware(request: Request, call_next):
    body = ""
    if request.method in WRITE_METHODS:
        body = await body_as_text(request)

    response = await call_next(request)

    if request.method in WRITE_METHODS:
        now = utc_now()
        with db_conn() as conn:
            conn.execute(
                """
                INSERT INTO audit_events (
                  id, actor_type, actor_id, event_type, entity_type, entity_id, event_data, occurred_at, created_at
                ) VALUES (?, 'STAFF', ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    str(uuid.uuid4()),
                    parse_staff_id(request),
                    f"HTTP_{request.method}",
                    "endpoint",
                    request.url.path,
                    json.dumps(
                        {
                            "status_code": response.status_code,
                            "query": dict(request.query_params),
                            "body": body[:3000],
                        }
                    ),
                    now,
                    now,
                ),
            )

    return response


class MemberIn(BaseModel):
    member_number: str
    first_name: str
    last_name: str
    date_of_birth: str | None = None
    phone: str | None = None
    email: str | None = None


class MemberVerifyIn(BaseModel):
    outcome: str = Field(pattern="^(VERIFIED|REJECTED)$")
    notes: str | None = None
    document_ref: str | None = None


class SupplierIn(BaseModel):
    name: str
    code: str
    contact_name: str | None = None
    contact_email: str | None = None
    contact_phone: str | None = None
    address: str | None = None
    is_active: bool = True


class ProductIn(BaseModel):
    sku: str
    name: str
    description: str | None = None
    unit_of_measure: str
    is_active: bool = True


class InventoryMovementIn(BaseModel):
    product_id: str
    quantity: float
    reason: str | None = None


class OrderItemIn(BaseModel):
    product_id: str
    quantity: float = Field(gt=0)
    unit_price: float = Field(ge=0)


class OrderCreateIn(BaseModel):
    member_id: str
    notes: str | None = None
    items: list[OrderItemIn]


@app.post("/staff/login")
def staff_login(request: Request):
    return {
        "message": "Cognito JWT expected in Authorization header for staff-authenticated endpoints.",
        "staff_id": parse_staff_id(request),
    }


@app.get("/members")
def list_members():
    with db_conn() as conn:
        return [dict(r) for r in conn.execute("SELECT * FROM members ORDER BY created_at DESC")]


@app.post("/members")
def create_member(payload: MemberIn):
    now = utc_now()
    member_id = str(uuid.uuid4())
    with db_conn() as conn:
        conn.execute(
            """
            INSERT INTO members (id, member_number, first_name, last_name, date_of_birth, phone, email, status, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, 'PENDING', ?, ?)
            """,
            (
                member_id,
                payload.member_number,
                payload.first_name,
                payload.last_name,
                payload.date_of_birth,
                payload.phone,
                payload.email,
                now,
                now,
            ),
        )
        row = conn.execute("SELECT * FROM members WHERE id = ?", (member_id,)).fetchone()
    return row_to_dict(row)


@app.get("/members/{member_id}")
def get_member(member_id: str):
    with db_conn() as conn:
        row = conn.execute("SELECT * FROM members WHERE id = ?", (member_id,)).fetchone()
    if not row:
        raise HTTPException(404, "Member not found")
    return dict(row)


@app.put("/members/{member_id}")
def update_member(member_id: str, payload: MemberIn):
    with db_conn() as conn:
        exists = conn.execute("SELECT id FROM members WHERE id = ?", (member_id,)).fetchone()
        if not exists:
            raise HTTPException(404, "Member not found")
        conn.execute(
            """
            UPDATE members
            SET member_number=?, first_name=?, last_name=?, date_of_birth=?, phone=?, email=?, updated_at=?
            WHERE id=?
            """,
            (
                payload.member_number,
                payload.first_name,
                payload.last_name,
                payload.date_of_birth,
                payload.phone,
                payload.email,
                utc_now(),
                member_id,
            ),
        )
        row = conn.execute("SELECT * FROM members WHERE id = ?", (member_id,)).fetchone()
    return dict(row)


@app.delete("/members/{member_id}")
def delete_member(member_id: str):
    with db_conn() as conn:
        deleted = conn.execute("DELETE FROM members WHERE id = ?", (member_id,)).rowcount
    if not deleted:
        raise HTTPException(404, "Member not found")
    return {"deleted": True}


@app.post("/members/{member_id}/verify")
def verify_member(member_id: str, payload: MemberVerifyIn, request: Request):
    now = utc_now()
    with db_conn() as conn:
        member = conn.execute("SELECT id FROM members WHERE id = ?", (member_id,)).fetchone()
        if not member:
            raise HTTPException(404, "Member not found")
        conn.execute(
            """
            INSERT INTO member_verifications (
                id, member_id, outcome, verified_by_staff_id, notes, document_ref, verified_at, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                str(uuid.uuid4()),
                member_id,
                payload.outcome,
                parse_staff_id(request),
                payload.notes,
                payload.document_ref,
                now,
                now,
            ),
        )
        conn.execute(
            "UPDATE members SET status = ?, updated_at = ? WHERE id = ?",
            (payload.outcome, now, member_id),
        )
        row = conn.execute("SELECT * FROM members WHERE id = ?", (member_id,)).fetchone()
    return dict(row)


def build_crud_routes(prefix: str, table: str, payload_model):
    @app.get(prefix)
    def list_items():
        with db_conn() as conn:
            return [dict(r) for r in conn.execute(f"SELECT * FROM {table} ORDER BY created_at DESC")]

    @app.post(prefix)
    def create_item(payload: payload_model):
        now = utc_now()
        item_id = str(uuid.uuid4())
        data = payload.model_dump()
        columns = ["id", *data.keys(), "created_at", "updated_at"]
        placeholders = ", ".join(["?"] * len(columns))
        values = [item_id, *data.values(), now, now]
        with db_conn() as conn:
            conn.execute(
                f"INSERT INTO {table} ({', '.join(columns)}) VALUES ({placeholders})",
                values,
            )
            row = conn.execute(f"SELECT * FROM {table} WHERE id = ?", (item_id,)).fetchone()
        return dict(row)

    @app.get(f"{prefix}/{{item_id}}")
    def get_item(item_id: str):
        with db_conn() as conn:
            row = conn.execute(f"SELECT * FROM {table} WHERE id = ?", (item_id,)).fetchone()
        if not row:
            raise HTTPException(404, "Not found")
        return dict(row)

    @app.put(f"{prefix}/{{item_id}}")
    def update_item(item_id: str, payload: payload_model):
        data = payload.model_dump()
        fields = [f"{k} = ?" for k in data.keys()]
        with db_conn() as conn:
            exists = conn.execute(f"SELECT id FROM {table} WHERE id = ?", (item_id,)).fetchone()
            if not exists:
                raise HTTPException(404, "Not found")
            conn.execute(
                f"UPDATE {table} SET {', '.join(fields)}, updated_at = ? WHERE id = ?",
                [*data.values(), utc_now(), item_id],
            )
            row = conn.execute(f"SELECT * FROM {table} WHERE id = ?", (item_id,)).fetchone()
        return dict(row)

    @app.delete(f"{prefix}/{{item_id}}")
    def delete_item(item_id: str):
        with db_conn() as conn:
            deleted = conn.execute(f"DELETE FROM {table} WHERE id = ?", (item_id,)).rowcount
        if not deleted:
            raise HTTPException(404, "Not found")
        return {"deleted": True}


build_crud_routes("/suppliers", "suppliers", SupplierIn)
build_crud_routes("/products", "products", ProductIn)


def create_inventory_movement(kind: str, payload: InventoryMovementIn, request: Request):
    quantity = payload.quantity
    if kind in {"RECEIVE", "WASTE"} and quantity <= 0:
        raise HTTPException(400, "Quantity must be greater than zero")
    if kind == "WASTE":
        quantity = -abs(quantity)
    if kind == "ADJUST" and quantity == 0:
        raise HTTPException(400, "Quantity cannot be zero")

    movement_id = str(uuid.uuid4())
    now = utc_now()
    with db_conn() as conn:
        product = conn.execute("SELECT id FROM products WHERE id = ?", (payload.product_id,)).fetchone()
        if not product:
            raise HTTPException(404, "Product not found")
        conn.execute(
            """
            INSERT INTO inventory_movements
            (id, product_id, movement_type, quantity, reason, recorded_by_staff_id, occurred_at, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (movement_id, payload.product_id, kind, quantity, payload.reason, parse_staff_id(request), now, now),
        )
        row = conn.execute("SELECT * FROM inventory_movements WHERE id = ?", (movement_id,)).fetchone()
    return dict(row)


@app.post("/inventory/receive")
def inventory_receive(payload: InventoryMovementIn, request: Request):
    return create_inventory_movement("RECEIVE", payload, request)


@app.post("/inventory/adjust")
def inventory_adjust(payload: InventoryMovementIn, request: Request):
    return create_inventory_movement("ADJUST", payload, request)


@app.post("/inventory/waste")
def inventory_waste(payload: InventoryMovementIn, request: Request):
    return create_inventory_movement("WASTE", payload, request)


def require_verified_member(conn: sqlite3.Connection, member_id: str):
    member = conn.execute("SELECT id, status FROM members WHERE id = ?", (member_id,)).fetchone()
    if not member:
        raise HTTPException(404, "Member not found")
    if member["status"] != "VERIFIED":
        raise HTTPException(400, "Member must be VERIFIED before orders can be created/finalized")


@app.post("/orders")
def create_order(payload: OrderCreateIn, request: Request):
    if not payload.items:
        raise HTTPException(400, "Order requires at least one item")

    order_id = str(uuid.uuid4())
    now = utc_now()
    order_number = f"ORD-{datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S')}"
    with db_conn() as conn:
        require_verified_member(conn, payload.member_id)
        conn.execute(
            """
            INSERT INTO orders
            (id, member_id, order_number, status, ordered_by_staff_id, ordered_at, notes, created_at, updated_at)
            VALUES (?, ?, ?, 'PLACED', ?, ?, ?, ?, ?)
            """,
            (order_id, payload.member_id, order_number, parse_staff_id(request), now, payload.notes, now, now),
        )
        for item in payload.items:
            conn.execute(
                """
                INSERT INTO order_items (id, order_id, product_id, quantity, unit_price, created_at)
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (str(uuid.uuid4()), order_id, item.product_id, item.quantity, item.unit_price, now),
            )
        order = conn.execute("SELECT * FROM orders WHERE id = ?", (order_id,)).fetchone()
        items = [
            dict(r)
            for r in conn.execute("SELECT * FROM order_items WHERE order_id = ? ORDER BY created_at", (order_id,))
        ]
    return {"order": dict(order), "items": items}


@app.post("/orders/{order_id}/finalize")
def finalize_order(order_id: str, request: Request):
    now = utc_now()
    with db_conn() as conn:
        order = conn.execute("SELECT * FROM orders WHERE id = ?", (order_id,)).fetchone()
        if not order:
            raise HTTPException(404, "Order not found")
        if order["status"] == "COMPLETED":
            raise HTTPException(400, "Order already finalized")

        require_verified_member(conn, order["member_id"])
        items = [
            dict(r)
            for r in conn.execute("SELECT product_id, quantity FROM order_items WHERE order_id = ?", (order_id,))
        ]
        if not items:
            raise HTTPException(400, "Order has no items")

        staff_id = parse_staff_id(request)
        for item in items:
            conn.execute(
                """
                INSERT INTO inventory_movements
                (id, product_id, movement_type, quantity, reason, recorded_by_staff_id, occurred_at, created_at)
                VALUES (?, ?, 'DISPENSE', ?, ?, ?, ?, ?)
                """,
                (
                    str(uuid.uuid4()),
                    item["product_id"],
                    -abs(item["quantity"]),
                    f"Dispense for order {order['order_number']}",
                    staff_id,
                    now,
                    now,
                ),
            )

        conn.execute(
            "UPDATE orders SET status = 'COMPLETED', completed_at = ?, updated_at = ? WHERE id = ?",
            (now, now, order_id),
        )
        finalized = conn.execute("SELECT * FROM orders WHERE id = ?", (order_id,)).fetchone()
    return dict(finalized)
