import type { ReactNode } from "react";
import type { ContactUsSectionIcon } from "@/types/main/contact-us";

export interface ContactUsWorkspaceConfig {
  title: string;
  description: string;
}

export interface ContactUsField {
  id: string;
  label: string;
  value: string;
  multiline?: boolean;
}

export interface ContactUsImageField {
  label: string;
  src: string;
  alt: string;
}

export interface ContactUsSection {
  id: string;
  title: string;
  description: string;
  actionLabel: string;
  icon: ContactUsSectionIcon;
  fields: ContactUsField[];
  imageField?: ContactUsImageField;
}

export interface ContactUsHeaderProps {
  title: string;
  description: string;
}

export interface ContactUsSectionCardProps {
  section: ContactUsSection;
}

export interface ContactUsSectionHeaderProps {
  title: string;
  description: string;
  actionLabel: string;
  icon: ContactUsSectionIcon;
}

export interface ContactUsFieldCardProps {
  field: ContactUsField;
}

export interface ContactUsFieldGridProps {
  fields: ContactUsField[];
}

export interface ContactUsImageCardProps {
  imageField: ContactUsImageField;
}

export interface ContactUsActionButtonProps {
  children: ReactNode;
}
