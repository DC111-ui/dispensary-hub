# ERD

```mermaid
erDiagram
  MEMBER ||--o{ ORDER : places
  STAFF_USER ||--o{ ORDER : captures
  PRODUCT ||--o{ INVENTORY_MOVEMENT : has
  ORDER ||--o{ ORDER_ITEM : contains
  ORDER ||--o{ PAYMENT : receives
```

> Initial ERD draft for Dispensary Hub domain.
