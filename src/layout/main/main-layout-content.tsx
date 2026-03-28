import { type ReactNode } from "react";
import { SidebarShell } from "@/components/main/sidebar";

type MainLayoutContentProps = {
  children: ReactNode;
};

export function MainLayoutContent({ children }: MainLayoutContentProps) {
  return <SidebarShell>{children}</SidebarShell>;
}
