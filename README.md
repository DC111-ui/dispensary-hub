# Dispensary Hub ERP (Staff-Only)

An internal ERP web application for South African dispensaries.

This project is designed for **staff use only** and focuses on controlled operations, compliance traceability, and auditable business records.

## Product Scope

### Key constraints

- **No member login**: members do not access the system directly.
- **No real-time updates**: use request/response workflows only.
- **Staff-authenticated access** only.

### Core modules

1. **Members**
   - Staff-managed member profiles.
   - Manual KYC workflow (in-person verification recorded by staff).
2. **Suppliers**
   - Supplier master records and contact details.
3. **Products**
   - Product catalog with dispensary-specific metadata.
4. **Inventory Movements**
   - Movement-based stock model (no direct quantity edits).
   - Supported movement types:
     - `RECEIVE`
     - `ADJUST`
     - `WASTE`
     - `TRANSFER`
     - `DISPENSE`
5. **Orders / Dispense**
   - Staff capture of orders and dispensing events.
6. **Payments Captured**
   - Payment capture against orders/dispense records.
7. **Contribution Ledger (Append-Only)**
   - Immutable financial/contribution event tracking.
8. **Reports**
   - Operational and compliance reporting.
9. **Audit Log**
   - System-level immutable activity history.

## Manual KYC Policy

KYC is **staff-driven and in-person**.

- Staff verifies the member physically.
- The system records a verification event with:
  - verification outcome
  - staff user ID
  - timestamp
  - optional notes/doc reference
- A member **must be in `VERIFIED` status** before any transaction (e.g., dispense/order completion) is allowed.

## Architecture (AWS)

### Frontend

- **CloudFront + S3**
  - Static frontend hosted in S3.
  - CloudFront used for global distribution and TLS termination.

### API Layer

- **API Gateway + Lambda**
  - REST endpoints via API Gateway.
  - Stateless business logic in Lambda functions.

### Data Layer

- **RDS PostgreSQL**
  - Source of truth for transactional and reporting data.

### Authentication

- **Cognito (staff auth)**
  - Staff users authenticate via Cognito.
  - Role/permission controls enforced server-side.

### Optional Document Storage

- **Private S3 bucket for KYC uploads**
  - Optional storage for supporting KYC documents.
  - Access restricted to authorized staff/services only.

## Data & Compliance Design Notes

- Use an **append-first design** for critical records:
  - contribution ledger entries are append-only.
  - inventory is reconstructed from movement history.
  - audit records are immutable.
- Enforce validation rules server-side, including:
  - member verification checks before transacting.
  - movement type and quantity constraints.
  - staff identity attribution on sensitive actions.
- Maintain consistent timestamps in UTC.

## Suggested MVP Milestones

1. Bootstrap frontend and API infrastructure.
2. Implement staff authentication and role checks.
3. Implement Members + Manual KYC workflow.
4. Implement Products, Suppliers, and Inventory movement engine.
5. Implement Orders/Dispense and Payment capture.
6. Implement append-only Contribution ledger and Audit log.
7. Add reports and compliance exports.

## Non-Goals (Current Brief)

- Member-facing portal or mobile app.
- Real-time websocket/event-stream updates.
- Automated external KYC provider integration.

## Status

This README captures the initial project brief and target architecture for delivery.
