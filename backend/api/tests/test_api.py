import os
from pathlib import Path

from fastapi.testclient import TestClient


def build_client(tmp_path: Path):
    os.environ["DB_PATH"] = str(tmp_path / "test.db")
    from backend.api.main import app, init_db

    init_db()
    return TestClient(app)


def test_member_verification_required_for_orders(tmp_path):
    client = build_client(tmp_path)

    created_product = client.post(
        "/products",
        json={"sku": "SKU1", "name": "Blue Dream", "unit_of_measure": "g", "is_active": True},
    ).json()

    member = client.post(
        "/members",
        json={
            "member_number": "M-001",
            "first_name": "Jane",
            "last_name": "Doe",
            "email": "jane@example.com",
        },
    ).json()

    blocked = client.post(
        "/orders",
        json={
            "member_id": member["id"],
            "items": [{"product_id": created_product["id"], "quantity": 1.0, "unit_price": 100.0}],
        },
    )
    assert blocked.status_code == 400

    client.post(f"/members/{member['id']}/verify", json={"outcome": "VERIFIED"})
    created_order = client.post(
        "/orders",
        json={
            "member_id": member["id"],
            "items": [{"product_id": created_product["id"], "quantity": 1.0, "unit_price": 100.0}],
        },
    )
    assert created_order.status_code == 200


def test_audit_logged_for_write(tmp_path):
    client = build_client(tmp_path)
    client.post(
        "/suppliers",
        json={"name": "Acme", "code": "ACME", "is_active": True},
        headers={"x-staff-id": "staff-123"},
    )

    db_path = os.environ["DB_PATH"]
    import sqlite3

    conn = sqlite3.connect(db_path)
    count = conn.execute("SELECT COUNT(*) FROM audit_events").fetchone()[0]
    actor = conn.execute(
        "SELECT actor_id FROM audit_events ORDER BY created_at DESC LIMIT 1"
    ).fetchone()[0]
    conn.close()

    assert count >= 1
    assert actor == "staff-123"
