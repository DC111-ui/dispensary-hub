import type { ComponentType } from "react";

import { PosMockup } from "./pos-mockup";
import { InventoryMockup } from "./inventory-mockup";
import { ProductsMockup } from "./products-mockup";
import { CustomersMockup } from "./customers-mockup";
import { SuppliersMockup } from "./suppliers-mockup";
import { ReportingMockup } from "./reporting-mockup";
import { ComplianceMockup } from "./compliance-mockup";
import { AccessMockup } from "./access-mockup";
import { OnlineStoreMockup } from "./online-store-mockup";
import { WhatsappOrderingMockup } from "./whatsapp-ordering-mockup";
import { AiForecastingMockup } from "./ai-forecasting-mockup";
import { SmartInventoryMockup } from "./smart-inventory-mockup";
import { IntegrationsMockup } from "./integrations-mockup";
import { MobileAppMockup } from "./mobile-app-mockup";

const FEATURE_MOCKUPS: Record<string, ComponentType> = {
  pos: PosMockup,
  inventory: InventoryMockup,
  products: ProductsMockup,
  customers: CustomersMockup,
  suppliers: SuppliersMockup,
  reporting: ReportingMockup,
  compliance: ComplianceMockup,
  access: AccessMockup,
  "online-store": OnlineStoreMockup,
  "whatsapp-ordering": WhatsappOrderingMockup,
  "ai-forecasting": AiForecastingMockup,
  "smart-inventory": SmartInventoryMockup,
  integrations: IntegrationsMockup,
  "mobile-app": MobileAppMockup,
};

export { FEATURE_MOCKUPS };
