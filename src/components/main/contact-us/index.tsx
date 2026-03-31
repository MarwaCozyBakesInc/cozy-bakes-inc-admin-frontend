import { contactUsSections, contactUsWorkspace } from "@/data/main/contact-us";
import { ContactUsHeader } from "./contact-us-header";
import { ContactUsSectionCard } from "./contact-us-section-card";

function ContactUs() {
  return (
    <section className="space-y-5">
      <ContactUsHeader
        title={contactUsWorkspace.title}
        description={contactUsWorkspace.description}
      />

      <div className="space-y-4">
        {contactUsSections.map((section) => (
          <ContactUsSectionCard key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}

export default ContactUs;
