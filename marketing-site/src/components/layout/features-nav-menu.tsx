"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { FEATURE_CATEGORIES } from "@/lib/constants/features";

function FeaturesNavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground focus:text-foreground data-[state=open]:text-foreground h-auto rounded-none bg-transparent p-0 text-sm font-medium tracking-tight hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[560px] gap-1 p-2 sm:grid-cols-2">
              {FEATURE_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <NavigationMenuLink asChild>
                    <Link href={`/features/${category.id}`}>
                      <span className="text-sm font-medium">{category.title}</span>
                      <span className="text-muted-foreground text-xs">
                        {category.tagline}
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
            <div className="border-border mt-1 border-t p-2">
              <NavigationMenuLink asChild>
                <Link href="/features" className="text-primary text-sm font-medium">
                  See all features
                </Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  );
}

export { FeaturesNavMenu };
