import { type ReactNode } from "react";
import { MainLayoutContent } from "@/layout/main/main-layout-content";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return <MainLayoutContent>{children}</MainLayoutContent>;
}
