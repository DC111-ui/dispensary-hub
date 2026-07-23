/**
 * Fictional store used to populate the feature mockups on /features/[slug].
 * Kept in one place so every mock screen shares the same business, staff,
 * customers, products, and suppliers.
 */

export const DEMO_BUSINESS = "Discreet420";

export const DEMO_STORES = [
  { id: "cpt", name: "Discreet420 — Cape Town CBD" },
  { id: "jhb", name: "Discreet420 — Sandton, Johannesburg" },
];

export const DEMO_STAFF = {
  owner: { name: "Naledi Khumalo", role: "Owner", initials: "NK" },
  manager: { name: "Naledi Khumalo", role: "Manager", initials: "NK" },
  cashier: { name: "Sipho Dlamini", role: "Cashier", initials: "SD" },
  inventory: { name: "Refilwe Mokoena", role: "Inventory Manager", initials: "RM" },
  compliance: { name: "Refilwe Mokoena", role: "Compliance Officer", initials: "RM" },
};

export const DEMO_CUSTOMERS = [
  { name: "Jason Petersen", tier: "Gold", points: 1240, since: "Mar 2025" },
  { name: "Thandeka Nkosi", tier: "Silver", points: 610, since: "Jul 2025" },
  { name: "Michael van der Merwe", tier: "Silver", points: 385, since: "Jan 2026" },
];

export const DEMO_SUPPLIERS = [
  { name: "Cape Canna Farms (Pty) Ltd", leadTime: "3 days", onTime: "96%" },
  { name: "Highveld Herb Co.", leadTime: "5 days", onTime: "89%" },
  { name: "Karoo Green Growers", leadTime: "4 days", onTime: "93%" },
];

export type DemoProduct = {
  name: string;
  category: string;
  thc?: string;
  cbd?: string;
  price: string;
  batch: string;
  supplier: string;
  stock: number;
};

export const DEMO_PRODUCTS: DemoProduct[] = [
  { name: "Blue Dream 3.5g", category: "Flower", thc: "19%", cbd: "<1%", price: "R280", batch: "BD-0472", supplier: "Cape Canna Farms", stock: 34 },
  { name: "OG Kush Pre-Roll 1g", category: "Pre-Roll", thc: "22%", cbd: "<1%", price: "R65", batch: "OGK-1183", supplier: "Highveld Herb Co.", stock: 112 },
  { name: "Girl Scout Cookies 3.5g", category: "Flower", thc: "24%", cbd: "<1%", price: "R320", batch: "GSC-0339", supplier: "Karoo Green Growers", stock: 6 },
  { name: "Green Crack Cartridge 0.5g", category: "Concentrate", thc: "78%", cbd: "0%", price: "R450", batch: "GCV-0911", supplier: "Cape Canna Farms", stock: 21 },
  { name: "Granddaddy Purple 7g", category: "Flower", thc: "20%", cbd: "<1%", price: "R550", batch: "GDP-0205", supplier: "Highveld Herb Co.", stock: 18 },
  { name: "Sour Diesel Pre-Roll 5-pack", category: "Pre-Roll", thc: "21%", cbd: "<1%", price: "R280", batch: "SD-0788", supplier: "Karoo Green Growers", stock: 47 },
  { name: "CBD Calm Tincture 30ml", category: "Tincture", thc: "0%", cbd: "500mg", price: "R380", batch: "CCT-0154", supplier: "Cape Canna Farms", stock: 29 },
  { name: "Northern Lights 3.5g", category: "Flower", thc: "18%", cbd: "<1%", price: "R260", batch: "NL-0640", supplier: "Highveld Herb Co.", stock: 3 },
];

export const DEMO_INTEGRATIONS = {
  accounting: ["Sage", "Xero", "QuickBooks"],
  payments: ["Ozow", "PayFast", "Yoco", "Peach Payments"],
  messaging: ["WhatsApp", "Email", "SMS"],
  marketing: ["Google", "Meta"],
};

export const DEMO_ROLES = ["Owner", "Manager", "Cashier", "Inventory Manager", "Compliance Officer"];
