# Flow

## High-level request flow

1. Staff user signs in with Cognito.
2. Frontend (Next.js/React) calls API Gateway endpoints.
3. Lambda handlers validate authorization and business rules.
4. Handlers persist/retrieve data from PostgreSQL (RDS).
5. API response is returned to frontend for staff workflows.

## Critical business flow: Dispense

1. Validate member KYC status = `VERIFIED`.
2. Validate product availability via inventory movement ledger.
3. Create order + dispense records.
4. Capture payment record.
5. Append audit and contribution ledger entries.
