# Backend

FastAPI service for the Dispensary Hub REST API.

## Run locally

```bash
cd backend/api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

## Endpoints implemented

- `POST /staff/login` (Cognito JWT-aware helper endpoint)
- CRUD: `/members`, `/suppliers`, `/products`
- `POST /members/{id}/verify`
- `POST /inventory/receive`, `POST /inventory/adjust`, `POST /inventory/waste`
- `POST /orders` (blocks non-VERIFIED members)
- `POST /orders/{id}/finalize`

Write requests are audit-logged via middleware into `audit_events`.
