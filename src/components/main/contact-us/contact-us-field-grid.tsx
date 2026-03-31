import type { ContactUsFieldGridProps } from "@/interfaces/main/contact-us";
import { ContactUsFieldCard } from "./contact-us-field-card";

export function ContactUsFieldGrid({ fields }: ContactUsFieldGridProps) {
  if (fields.length <= 2) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <ContactUsFieldCard key={field.id} field={field} />
        ))}
      </div>
    );
  }

  const [firstField, secondField, ...remainingFields] = fields;

  return (
    <div className="space-y-4">
      <div className="grid gap-5 md:grid-cols-2">
        {[firstField, secondField].map((field) => (
          <ContactUsFieldCard key={field.id} field={field} />
        ))}
      </div>

      {remainingFields.map((field) => (
        <ContactUsFieldCard key={field.id} field={field} />
      ))}
    </div>
  );
}
