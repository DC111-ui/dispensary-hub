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
    description: "A simple website where customers can browse and reserve online.",
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
    description: "An assistant that helps you decide what to restock and when.",
    icon: Sparkles,
  },
  {
    id: "smart-inventory",
    title: "Smart Inventory",
    description: "Automatically tells you when to reorder stock.",
    icon: Boxes,
  },
  {
    id: "platform-integrations",
    title: "Platform & Integrations",
    description: "Connects with your accounting, payment, and messaging tools.",
    icon: Plug,
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    description: "Manage your store on the go, from anywhere.",
    icon: Smartphone,
  },
];
