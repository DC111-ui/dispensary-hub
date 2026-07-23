import type { LucideIcon } from "lucide-react";
import {
  ShoppingCart,
  Package,
  Tags,
  Users,
  Truck,
  BarChart3,
  ShieldCheck,
  KeyRound,
} from "lucide-react";

export type FeatureCategory = {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  highlights: string[];
  /** Shown in the condensed grid on the home page. */
  homeFeatured: boolean;
};

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    id: "pos",
    title: "Point of Sale & Checkout",
    tagline: "A fast, accurate till built for regulated retail.",
    icon: ShoppingCart,
    highlights: [
      "Real-time sales dashboard and product search",
      "Barcode scanning at checkout",
      "Cart management with discounts and tax handling",
      "Digital and printable receipts",
      "Cash, card, EFT, wallet, and split payments",
    ],
    homeFeatured: true,
  },
  {
    id: "inventory",
    title: "Inventory & Batch Tracking",
    tagline: "Batch-aware stock control with a full movement history.",
    icon: Package,
    highlights: [
      "Batch-level stock tracking, not just SKU totals",
      "Movement types: receive, transfer, sale, adjustment, loss, destroy, return",
      "Complete, timestamped movement history per batch",
      "Low-stock and expiry visibility",
    ],
    homeFeatured: true,
  },
  {
    id: "products",
    title: "Products & Catalog",
    tagline: "One product model for every SKU you sell.",
    icon: Tags,
    highlights: [
      "Full product profiles: SKU, barcode, QR code",
      "Potency fields (THC% / CBD%) and pricing",
      "Product images and rich descriptions",
      "Add, edit, archive, and reactivate products",
    ],
    homeFeatured: true,
  },
  {
    id: "customers",
    title: "Customers & Loyalty",
    tagline: "Know your customers and keep them coming back.",
    icon: Users,
    highlights: [
      "Customer profiles with full purchase history",
      "Points-based loyalty with flexible redemption",
      "VIP tiers for your best customers",
      "Referral and birthday rewards",
    ],
    homeFeatured: true,
  },
  {
    id: "suppliers",
    title: "Suppliers & Purchasing",
    tagline: "Manage every supplier relationship in one place.",
    icon: Truck,
    highlights: [
      "Supplier records and contact management",
      "Purchase orders and invoices",
      "Delivery tracking and returns",
      "Supplier performance history",
    ],
    homeFeatured: true,
  },
  {
    id: "reporting",
    title: "Owner Insights & Reporting",
    tagline: "The numbers that matter, without the spreadsheet.",
    icon: BarChart3,
    highlights: [
      "Owner dashboard with live KPIs",
      "Sales, inventory, and staff performance reports",
      "Exportable reports for accounting and compliance",
    ],
    homeFeatured: true,
  },
  {
    id: "compliance",
    title: "Compliance & Traceability",
    tagline: "An audit trail for every batch, every sale, every store.",
    icon: ShieldCheck,
    highlights: [
      "Immutable audit log of system activity",
      "Full batch traceability: supplier to sale",
      "Built for regulator and inspection readiness",
    ],
    homeFeatured: false,
  },
  {
    id: "access",
    title: "Access, Roles & Multi-Store",
    tagline: "The right access, for the right person, at every location.",
    icon: KeyRound,
    highlights: [
      "Secure staff login with two-factor authentication",
      "Staff invites and onboarding",
      "Role-based access: Owner, Manager, Cashier, Inventory Manager, Compliance Officer",
      "Multi-branch management from a single account",
    ],
    homeFeatured: false,
  },
];
