BEGIN;

DROP TRIGGER IF EXISTS wallet_ledger_entries_append_only ON wallet_ledger_entries;
DROP TRIGGER IF EXISTS inventory_movements_append_only ON inventory_movements;
DROP FUNCTION IF EXISTS prevent_append_only_changes();

DROP TABLE IF EXISTS audit_events;
DROP TABLE IF EXISTS wallet_ledger_entries;
DROP TABLE IF EXISTS payments;
DROP TABLE IF EXISTS inventory_movements;
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS batches;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS suppliers;
DROP TABLE IF EXISTS member_verifications;
DROP TABLE IF EXISTS members;

DROP TYPE IF EXISTS audit_actor_type;
DROP TYPE IF EXISTS wallet_ledger_entry_type;
DROP TYPE IF EXISTS payment_status;
DROP TYPE IF EXISTS payment_method;
DROP TYPE IF EXISTS order_status;
DROP TYPE IF EXISTS inventory_movement_type;
DROP TYPE IF EXISTS verification_outcome;
DROP TYPE IF EXISTS member_status;

COMMIT;
