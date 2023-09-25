import React from "react";
import { Money, ShoppingCatalog, Workspace } from "@carbon/icons-react"

export type MenuItem = {
  name: string;
  slug: string;
  description?: string;
  icon: React.ReactNode
};

export const menus: MenuItem[] = [
  {
    name: "Dashboard",
    slug: "dashboard",
    icon: <Workspace className="w-7 h-7"  />
  },
  {
    name: "Products",
    slug: "products",
    icon: <ShoppingCatalog className="w-7 h-7" />
  },
  {
    name: "Sales",
    slug: "sales",
    icon: <Money className="w-7 h-7" />
  }
]