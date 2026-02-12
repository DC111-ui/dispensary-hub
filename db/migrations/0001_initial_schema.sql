BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE member_status AS ENUM ('PENDING', 'VERIFIED', 'REJECTED', 'SUSPENDED');
CREATE TYPE verification_outcome AS ENUM ('VERIFIED', 'REJECTED');
CREATE TYPE inventory_movement_type AS ENUM ('RECEIVE', 'ADJUST', 'WASTE', 'TRANSFER', 'DISPENSE');
CREATE TYPE order_status AS ENUM ('DRAFT', 'PLACED', 'COMPLETED', 'CANCELLED');
CREATE TYPE payment_method AS ENUM ('CASH', 'CARD', 'EFT', 'WALLET', 'OTHER');
CREATE TYPE payment_status AS ENUM ('PENDING', 'SETTLED', 'FAILED', 'REFUNDED');
CREATE TYPE wallet_ledger_entry_type AS ENUM ('CREDIT', 'DEBIT');
CREATE TYPE audit_actor_type AS ENUM ('STAFF', 'SYSTEM');

CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_number TEXT NOT NULL UNIQUE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  date_of_birth DATE,
  phone TEXT,
  email TEXT,
  status member_status NOT NULL DEFAULT 'PENDING',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE member_verifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID NOT NULL REFERENCES members(id),
  outcome verification_outcome NOT NULL,
  verified_by_staff_id TEXT NOT NULL,
  notes TEXT,
  document_ref TEXT,
  verified_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE suppliers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  contact_name TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  address TEXT,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sku TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  unit_of_measure TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE batches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id),
  supplier_id UUID REFERENCES suppliers(id),
  batch_number TEXT NOT NULL,
  manufactured_at DATE,
  expires_at DATE,
  received_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (product_id, batch_number)
);

CREATE TABLE inventory_movements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id),
  batch_id UUID REFERENCES batches(id),
  movement_type inventory_movement_type NOT NULL,
  quantity NUMERIC(14, 3) NOT NULL,
  source_location TEXT,
  destination_location TEXT,
  reason TEXT,
  order_item_id UUID,
  recorded_by_staff_id TEXT NOT NULL,
  occurred_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CHECK (quantity <> 0)
);

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID NOT NULL REFERENCES members(id),
  order_number TEXT NOT NULL UNIQUE,
  status order_status NOT NULL DEFAULT 'DRAFT',
  ordered_by_staff_id TEXT NOT NULL,
  ordered_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES products(id),
  batch_id UUID REFERENCES batches(id),
  quantity NUMERIC(14, 3) NOT NULL CHECK (quantity > 0),
  unit_price NUMERIC(12, 2) NOT NULL CHECK (unit_price >= 0),
  line_total NUMERIC(12, 2) GENERATED ALWAYS AS (quantity * unit_price) STORED,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE inventory_movements
  ADD CONSTRAINT fk_inventory_order_item
  FOREIGN KEY (order_item_id) REFERENCES order_items(id);

CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id),
  amount NUMERIC(12, 2) NOT NULL CHECK (amount > 0),
  method payment_method NOT NULL,
  status payment_status NOT NULL DEFAULT 'PENDING',
  provider_reference TEXT,
  paid_at TIMESTAMPTZ,
  captured_by_staff_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE wallet_ledger_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID NOT NULL REFERENCES members(id),
  order_id UUID REFERENCES orders(id),
  payment_id UUID REFERENCES payments(id),
  entry_type wallet_ledger_entry_type NOT NULL,
  amount NUMERIC(12, 2) NOT NULL CHECK (amount > 0),
  currency_code CHAR(3) NOT NULL DEFAULT 'ZAR',
  description TEXT,
  recorded_by_staff_id TEXT,
  occurred_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE audit_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_type audit_actor_type NOT NULL,
  actor_id TEXT,
  event_type TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  event_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  ip_address INET,
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION prevent_append_only_changes()
RETURNS TRIGGER AS $$
BEGIN
  RAISE EXCEPTION 'Table % is append-only: % operations are not allowed', TG_TABLE_NAME, TG_OP;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER inventory_movements_append_only
BEFORE UPDATE OR DELETE ON inventory_movements
FOR EACH ROW
EXECUTE FUNCTION prevent_append_only_changes();

CREATE TRIGGER wallet_ledger_entries_append_only
BEFORE UPDATE OR DELETE ON wallet_ledger_entries
FOR EACH ROW
EXECUTE FUNCTION prevent_append_only_changes();

CREATE INDEX idx_member_verifications_member_id ON member_verifications(member_id);
CREATE INDEX idx_batches_product_id ON batches(product_id);
CREATE INDEX idx_inventory_movements_product_batch ON inventory_movements(product_id, batch_id);
CREATE INDEX idx_inventory_movements_occurred_at ON inventory_movements(occurred_at);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_orders_member_id ON orders(member_id);
CREATE INDEX idx_payments_order_id ON payments(order_id);
CREATE INDEX idx_wallet_ledger_entries_member_id ON wallet_ledger_entries(member_id);
CREATE INDEX idx_wallet_ledger_entries_occurred_at ON wallet_ledger_entries(occurred_at);
CREATE INDEX idx_audit_events_entity ON audit_events(entity_type, entity_id);
CREATE INDEX idx_audit_events_occurred_at ON audit_events(occurred_at);

COMMIT;
