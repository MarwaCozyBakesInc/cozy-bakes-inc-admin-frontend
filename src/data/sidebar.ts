export type SidebarIconName =
  | "dashboard"
  | "orders"
  | "products"
  | "categories"
  | "customers"
  | "location"
  | "menu"
  | "reports"
  | "reviews"
  | "contact"
  | "settings";

export type SidebarItem = {
  id: string;
  label: string;
  icon: SidebarIconName;
  href?: string;
  hasChevron?: boolean;
  children?: readonly string[];
  ctaLabel?: string;
};

export const sidebarCompany = {
  name: "Cozy Bakes Inc.",
  subtitle: "By Marwa",
  logoSrc: "/images/logo.svg",
} as const;

export const sidebarProfile = {
  initials: "MA",
  name: "Marwa",
  role: "Administrator",
} as const;

export const sidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    href: "/",
  },
  {
    id: "orders",
    label: "Orders",
    icon: "orders",
  },
  {
    id: "products",
    label: "Products",
    icon: "products",
  },
  {
    id: "categories",
    label: "Categories",
    icon: "categories",
    hasChevron: true,
    children: [
      "Bakery Product",
      "Gelatines Free Product",
      "preserves Product",
      "Vanilla Product",
    ],
    ctaLabel: "Add New Category",
  },
  {
    id: "customers",
    label: "Customers",
    icon: "customers",
  },
  {
    id: "find-us",
    label: "Find Us Her",
    icon: "location",
  },
  {
    id: "our-menu",
    label: "Our Menu",
    icon: "menu",
  },
  {
    id: "reports",
    label: "Reports",
    icon: "reports",
  },
  {
    id: "reviews",
    label: "Reviews",
    icon: "reviews",
  },
  {
    id: "contact",
    label: "Contact us",
    icon: "contact",
  },
  {
    id: "settings",
    label: "Settings",
    icon: "settings",
  },
] as const;

export const sidebarSignOutLabel = "Sign Out";
