export type PricingTier = {
  id: string;
  name: string;
  price: string;
  billingNote: string;
  description: string;
  features: string[];
  ctaLabel: string;
  emphasized: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "R599",
    billingNote: "/month",
    description: "For a single store finding its feet.",
    features: [
      "1 store",
      "Point of sale & checkout",
      "Inventory & batch tracking",
      "Products & catalog",
      "Basic reporting",
      "Audit log",
    ],
    ctaLabel: "Get started",
    emphasized: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: "R1,499",
    billingNote: "/month",
    description: "For a growing store that needs loyalty and insight.",
    features: [
      "Up to 2 stores",
      "Everything in Starter",
      "Customers & loyalty",
      "Suppliers & purchasing",
      "Full reporting suite",
      "Role-based access",
    ],
    ctaLabel: "Get started",
    emphasized: false,
  },
  {
    id: "professional",
    name: "Professional",
    price: "R2,999",
    billingNote: "/month",
    description: "For multi-store operators who need full traceability.",
    features: [
      "Up to 5 stores",
      "Everything in Growth",
      "Full batch traceability chain",
      "Compliance Officer role",
      "Priority support",
    ],
    ctaLabel: "Get started",
    emphasized: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    billingNote: "",
    description: "For larger operators with custom requirements.",
    features: [
      "Unlimited stores",
      "Everything in Professional",
      "Custom onboarding & data migration",
      "Dedicated account manager",
      "Custom SLAs",
    ],
    ctaLabel: "Talk to us",
    emphasized: false,
  },
];

export type Addon = {
  id: string;
  name: string;
  description: string;
};

export const ADDONS: Addon[] = [
  { id: "extra-store", name: "Additional store", description: "Add another branch to any plan." },
  { id: "extra-staff", name: "Additional staff seats", description: "For teams that outgrow their plan's included seats." },
  { id: "data-migration", name: "Data migration", description: "White-glove import of your existing product and customer data." },
  { id: "onboarding", name: "Priority onboarding", description: "A guided setup session with our team." },
];

export type PricingFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const PRICING_FAQ: PricingFaqItem[] = [
  {
    id: "trial",
    question: "Is there a free trial?",
    answer:
      "We're onboarding early customers directly — book a demo and we'll walk you through getting started, including trial options for your store.",
  },
  {
    id: "switch-plans",
    question: "Can I switch plans later?",
    answer:
      "Yes. You can move up or down a tier as your store count and needs change.",
  },
  {
    id: "contracts",
    question: "Are there long-term contracts?",
    answer: "No long-term lock-in is required — plans are billed monthly.",
  },
  {
    id: "data-ownership",
    question: "Who owns my data?",
    answer:
      "You do. Your product, customer, and transaction data belongs to your business, always.",
  },
];
