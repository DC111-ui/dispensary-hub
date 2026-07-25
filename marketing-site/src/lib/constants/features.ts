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
  Globe,
  MessageCircle,
  Sparkles,
  Boxes,
  Plug,
  Smartphone,
} from "lucide-react";

export type FeatureCategory = {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  icon: LucideIcon;
  highlights: string[];
  /** Shown in the condensed grid on the home page. */
  homeFeatured: boolean;
};

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    id: "whatsapp-ordering",
    title: "WhatsApp Ordering",
    tagline: "Let customers browse and order through WhatsApp.",
    overview:
      "Most of your customers are already on WhatsApp. Let them order there directly, without downloading anything new.",
    icon: MessageCircle,
    highlights: [
      "Customers order without installing an app",
      "Automatic replies to common questions",
      "Orders flow straight into your system",
    ],
    homeFeatured: false,
  },
  {
    id: "online-store",
    title: "Online Store",
    tagline: "A simple website where customers can browse and reserve online.",
    overview:
      "Meet your customers where they already are. A simple online storefront lets them browse and reserve, built to match how your physical store already works.",
    icon: Globe,
    highlights: [
      "Customers can browse your products online",
      "Reserve items for pickup",
      "Built to match how your physical store works",
    ],
    homeFeatured: false,
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    tagline: "Manage your store on the go, from anywhere.",
    overview:
      "Your store doesn't stop when you leave the counter. Check sales, stock, and alerts from your phone, wherever you are.",
    icon: Smartphone,
    highlights: [
      "Works for managers, cashiers, and stock staff",
      "Check sales and stock from your phone",
      "Get alerts wherever you are",
    ],
    homeFeatured: false,
  },
  {
    id: "ai-forecasting",
    title: "AI Assistant & Forecasting",
    tagline: "An assistant that helps you decide what to restock and when.",
    overview:
      "Stock decisions are easier with a second opinion. LeafLedger's assistant looks at your real sales and stock data to help you decide what to restock and when.",
    icon: Sparkles,
    highlights: [
      "Predicts what you'll need to restock",
      "Answers questions about your sales and stock",
      "Spots patterns you might miss",
    ],
    homeFeatured: false,
  },
  {
    id: "pos",
    title: "Point of Sale & Checkout",
    tagline: "A fast, simple till for ringing up sales.",
    overview:
      "Your till is the heart of the store. LeafLedger's point of sale is built to be fast at checkout, accurate every time, and simple enough for any staff member to use on day one.",
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
    overview:
      "Every product you carry belongs to a batch, and every batch tells its own story: what supplier it came from, when it was received, and what happened to it since. LeafLedger tracks stock at the batch level so you always know exactly what you have.",
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
    overview:
      "Keep every product detail in one place instead of scattered across notebooks and spreadsheets. From barcodes to potency levels to pricing, your whole catalog lives in one simple system.",
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
    tagline: "Know your members, and keep your club on the right side of the law.",
    overview:
      "For a club, every sale has to go to a real, registered adult member, not a walk-in from the public. LeafLedger verifies members before they buy, and keeps a full history for every customer so your team can offer the right rewards at the right time.",
    icon: Users,
    highlights: [
      "Verify every member before they buy: age, ID, and registration status",
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
    overview:
      "Your suppliers keep your shelves full. LeafLedger keeps every supplier relationship organized, from first contact to the invoices and deliveries that follow.",
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
    overview:
      "Numbers you can trust, without building your own spreadsheet. See how your store is really doing, any time you need to.",
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
    tagline: "A full record of everything, for every store or club.",
    overview:
      "Regulated retail runs on records. Whether you run a store or a private cannabis club under the Cannabis for Private Purposes Act, LeafLedger keeps a complete history of every action, so you can answer any question during an inspection.",
    icon: ShieldCheck,
    highlights: [
      "A record of every action taken, that can't be changed",
      "Track every product from the supplier to the sale",
      "Stay within the legal limits for growing and holding stock",
      "Always ready for an inspection",
    ],
    homeFeatured: true,
  },
  {
    id: "access",
    title: "Access, Roles & Multi-Store",
    tagline: "The right access, for the right person, at every location.",
    overview:
      "Not everyone on your team needs to see everything. LeafLedger gives each staff member the right access for their role, across every store you run.",
    icon: KeyRound,
    highlights: [
      "Safe staff logins, with extra security built in",
      "Invite staff and get them set up fast",
      "Give each staff member the right access: Owner, Manager, Cashier, Inventory Manager, or Compliance Officer",
      "Manage multiple stores from one account",
    ],
    homeFeatured: false,
  },
  {
    id: "smart-inventory",
    title: "Smart Inventory",
    tagline: "Automatically tells you when to reorder stock.",
    overview:
      "Stop guessing when to reorder. LeafLedger watches your stock levels and tells you before you run out, or before something expires.",
    icon: Boxes,
    highlights: [
      "Reorder suggestions based on real sales",
      "Flags slow-moving stock",
      "Expiry and low-stock alerts",
    ],
    homeFeatured: false,
  },
  {
    id: "integrations",
    title: "Platform & Integrations",
    tagline: "Connects with the accounting, payment, and messaging tools you already use.",
    overview:
      "LeafLedger doesn't ask you to abandon the tools you already use. Connect your accounting, payment, and messaging tools, and let everything work together.",
    icon: Plug,
    highlights: [
      "Connects with accounting tools",
      "Connects with payment providers",
      "Connects with messaging tools",
    ],
    homeFeatured: false,
  },
];

/**
 * Home page leads with running a club/membership model legally, then the
 * day-to-day operational features. Only affects display order on the home
 * page; the full features list and nav keep the catalog order above.
 */
export const HOME_FEATURED_ORDER = [
  "compliance",
  "customers",
  "suppliers",
  "reporting",
  "pos",
  "products",
  "inventory",
];
