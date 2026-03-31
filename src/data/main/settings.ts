import type {
  SettingsNotificationSection,
  SettingsScreenConfig,
  SettingsSection,
} from "@/interfaces/main/settings";

export const settingsScreen: SettingsScreenConfig = {
  title: "Settings",
  description: "Manage your bakery and account settings",
  ariaLabel: "Settings workspace",
} as const;

const storeInformationSection = {
  id: "store-information",
  kind: "fields",
  icon: "store",
  title: "Store Information",
  description: "management your store information",
  action: {
    label: "Edit Store Information",
  },
  fields: [
    {
      id: "store-name",
      label: "Store Name",
      value: "Cozy Bakes Inc.",
      layout: "full",
      valueTone: "md",
    },
    {
      id: "store-description",
      label: "Store Description",
      value:
        "We bring the warmth of our oven to local squares across the city. Come say hello and taste the season's best.",
      layout: "full",
      multiline: true,
      valueTone: "md",
    },
    {
      id: "contact-email",
      label: "Contact Email",
      value: "hello@cozybakes.com",
      layout: "half",
      valueTone: "sm",
    },
    {
      id: "phone-number",
      label: "Phone Number",
      value: "+1 (555) 123-4567",
      layout: "half",
      valueTone: "sm",
    },
    {
      id: "store-location",
      label: "Store Location",
      value: "100 Smith Street Collingwood VIC 3066 AU",
      layout: "full",
      valueTone: "sm",
    },
  ],
} as const;

const accountInformationSection = {
  id: "account-information",
  kind: "fields",
  icon: "account",
  title: "Account Information",
  description: "management your account information",
  action: {
    label: "Edit Account Information",
  },
  fields: [
    {
      id: "first-name",
      label: "First Name",
      value: "marwa",
      layout: "half",
      valueTone: "sm",
    },
    {
      id: "last-name",
      label: "Last Name",
      value: "Administrator",
      layout: "half",
      valueTone: "sm",
    },
    {
      id: "email-address",
      label: "Email Address",
      value: "marwa@cozybakes.com",
      layout: "full",
      valueTone: "sm",
    },
  ],
} as const;

const passwordSection = {
  id: "change-password",
  kind: "action",
  icon: "password",
  title: "Change Password",
  description: "management your account password",
  action: {
    label: "Edit Password",
  },
} as const;

export const notificationPreferencesSection: SettingsNotificationSection = {
  id: "notification-preferences",
  kind: "notifications",
  icon: "notification",
  title: "Notification Preferences",
  description: "management your notification preferences",
  preferences: [
    {
      id: "new-orders",
      title: "New Orders",
      description: "Get notified when a new order is placed",
      enabled: true,
    },
    {
      id: "low-stock-alerts",
      title: "Low Stock Alerts",
      description: "Receive alerts when products are running low",
      enabled: true,
    },
    {
      id: "customer-messages",
      title: "Customer Messages",
      description: "Notifications for customer inquiries",
      enabled: false,
    },
    {
      id: "weekly-reports",
      title: "Weekly Reports",
      description: "Get weekly performance summaries",
      enabled: true,
    },
  ],
};

export const settingsSections: SettingsSection[] = [
  storeInformationSection,
  accountInformationSection,
  passwordSection,
  notificationPreferencesSection,
];
