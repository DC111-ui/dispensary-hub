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
    tagline: "A fast, simple till for ringing up sales.",
    icon: ShoppingCart,
    highlights: [
      "See your sales and find products instantly",
      "Scan barcodes at checkout",
      "Add discounts and tax automatically",
      "Print or send digital receipts",
      "Take cash, card, EFT, wallet, or split payments",
    ],
    homeFeatured: true,
  },
  {
    id: "inventory",
    title: "Inventory & Batch Tracking",
    tagline: "Always know exactly what stock you have, and where it came from.",
    icon: Package,
    highlights: [
      "Track stock by batch, not just by product",
      "Record every stock change: deliveries, transfers, sales, losses, and returns",
      "See the full history of every batch, with dates and times",
      "Get alerts before stock runs low or expires",
    ],
    homeFeatured: true,
  },
  {
    id: "products",
    title: "Products & Catalog",
    tagline: "One simple place for all your product details.",
    icon: Tags,
    highlights: [
      "Store product codes and barcodes in one place",
      "Track THC and CBD levels, plus pricing",
      "Add photos and descriptions",
      "Add, edit, archive, or bring back products anytime",
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
      "Reward points customers can build up and use later",
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
      "Keep all your supplier details in one place",
      "Purchase orders and invoices",
      "Track deliveries and returns",
      "See which suppliers deliver on time",
    ],
    homeFeatured: true,
  },
  {
    id: "reporting",
    title: "Owner Insights & Reporting",
    tagline: "The numbers that matter, without the spreadsheet.",
    icon: BarChart3,
    highlights: [
      "See your sales and stock at a glance",
      "Sales, inventory, and staff performance reports",
      "Download reports for your accountant or an inspection",
    ],
    homeFeatured: true,
  },
  {
    id: "compliance",
    title: "Compliance & Traceability",
    tagline: "A full record of everything, for every store.",
    icon: ShieldCheck,
    highlights: [
      "A record of every action taken, that can't be changed",
      "Track every product from the supplier to the sale",
      "Always ready for an inspection",
    ],
    homeFeatured: false,
  },
  {
    id: "access",
    title: "Access, Roles & Multi-Store",
    tagline: "The right access, for the right person, at every location.",
    icon: KeyRound,
    highlights: [
      "Safe staff logins, with extra security built in",
      "Invite staff and get them set up fast",
      "Give each staff member the right access: Owner, Manager, Cashier, Inventory Manager, or Compliance Officer",
      "Manage multiple stores from one account",
    ],
    homeFeatured: false,
  },
];
