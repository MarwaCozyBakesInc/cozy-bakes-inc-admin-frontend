import type {
  ContactUsSection,
  ContactUsWorkspaceConfig,
} from "@/interfaces/main/contact-us";

const contactUsCoverImage =
  "https://www.figma.com/api/mcp/asset/205c885a-925e-463c-852e-62b5cd4a65ac";

export const contactUsWorkspace: ContactUsWorkspaceConfig = {
  title: "Contact Us",
  description: "Monitor, moderate, and control public customer feedback",
};

export const contactUsSections: ContactUsSection[] = [
  {
    id: "hero-section",
    title: "hero section management",
    description: "management your store location and connection data",
    actionLabel: "Edit Hero Section",
    icon: "hero",
    fields: [
      {
        id: "hero-title",
        label: "Hero Section Titel",
        value: "Freshly Baked , Locally Found",
      },
      {
        id: "hero-subtitle",
        label: "Hero Section Sub Titel",
        value:
          "We bring the warmth of our oven to local squares across the city. Come say hello and taste the season's best.",
        multiline: true,
      },
    ],
    imageField: {
      label: "Cover Image",
      src: contactUsCoverImage,
      alt: "Fresh bread arranged on a rustic bakery table",
    },
  },
  {
    id: "contact-data",
    title: "Contact data management",
    description: "management your store location and connection data",
    actionLabel: "Edit Contact Data",
    icon: "contact",
    fields: [
      {
        id: "contact-email",
        label: "Contact Email",
        value: "hello@cozybakes.com",
      },
      {
        id: "phone-number",
        label: "Phone Number",
        value: "+1 (555) 123-4567",
      },
      {
        id: "location",
        label: "Our Location",
        value: "100 Smith Street Collingwood VIC 3066 AU",
      },
    ],
  },
];
