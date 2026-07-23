import type { LucideIcon } from "lucide-react";
import {
  Globe,
  MessageCircle,
  Sparkles,
  Boxes,
  Plug,
  Smartphone,
} from "lucide-react";

export type RoadmapItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: "online-store",
    title: "Online Store",
    description: "A compliant storefront for browsing and reserving online.",
    icon: Globe,
  },
  {
    id: "whatsapp-bot",
    title: "WhatsApp Ordering Bot",
    description: "Let customers browse and order through WhatsApp.",
    icon: MessageCircle,
  },
  {
    id: "ai-forecasting",
    title: "AI Assistant & Forecasting",
    description: "Demand forecasting and an assistant for day-to-day decisions.",
    icon: Sparkles,
  },
  {
    id: "smart-inventory",
    title: "Smart Inventory",
    description: "Automated reorder points and stock-level intelligence.",
    icon: Boxes,
  },
  {
    id: "platform-integrations",
    title: "Platform & Integrations",
    description: "Public API, webhooks, SDK, and accounting/payments/messaging integrations.",
    icon: Plug,
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    description: "Manage your store on the go, from anywhere.",
    icon: Smartphone,
  },
];
