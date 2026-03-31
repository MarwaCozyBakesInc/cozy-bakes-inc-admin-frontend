import type { ReactNode } from "react";
import type {
  SettingsFieldLayout,
  SettingsFieldValueTone,
  SettingsNotificationPreferenceId,
  SettingsSectionIcon,
  SettingsSectionKind,
} from "@/types/main/settings";

export interface SettingsScreenConfig {
  title: string;
  description: string;
  ariaLabel: string;
}

export interface SettingsShellProps {
  children: ReactNode;
}

export interface SettingsHeaderProps {
  title: string;
  description: string;
}

export interface SettingsSectionAction {
  label: string;
}

export interface SettingsField {
  id: string;
  label: string;
  value: string;
  layout: SettingsFieldLayout;
  multiline?: boolean;
  valueTone?: SettingsFieldValueTone;
}

export interface SettingsNotificationPreference {
  id: SettingsNotificationPreferenceId;
  title: string;
  description: string;
  enabled: boolean;
}

interface SettingsSectionBase {
  id: string;
  kind: SettingsSectionKind;
  icon: SettingsSectionIcon;
  title: string;
  description: string;
  action?: SettingsSectionAction;
}

export interface SettingsFieldSection extends SettingsSectionBase {
  kind: "fields";
  fields: readonly SettingsField[];
}

export interface SettingsActionSection extends SettingsSectionBase {
  kind: "action";
}

export interface SettingsNotificationSection extends SettingsSectionBase {
  kind: "notifications";
  preferences: readonly SettingsNotificationPreference[];
}

export type SettingsSection =
  | SettingsFieldSection
  | SettingsActionSection
  | SettingsNotificationSection;

export interface SettingsCanvasProps {
  ariaLabel: string;
  sections: readonly SettingsSection[];
}

export interface SettingsSectionCardProps {
  section: SettingsSection;
}

export interface SettingsSectionHeaderProps {
  icon: SettingsSectionIcon;
  title: string;
  description: string;
  action?: SettingsSectionAction;
}

export interface SettingsFieldGridProps {
  fields: readonly SettingsField[];
}

export interface SettingsFieldCardProps {
  field: SettingsField;
}

export interface SettingsNotificationGridProps {
  preferences: readonly SettingsNotificationPreference[];
}

export interface SettingsNotificationItemProps {
  preference: SettingsNotificationPreference;
  enabled: boolean;
  onToggle: (id: SettingsNotificationPreferenceId) => void;
}
