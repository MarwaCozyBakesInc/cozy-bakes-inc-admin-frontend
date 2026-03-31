import type { ContactUsHeaderProps } from "@/interfaces/main/contact-us";

export function ContactUsHeader({ title, description }: ContactUsHeaderProps) {
  return (
    <header>
      <h1 className="text-[24px] font-bold tracking-[0.016em] text-dark">
        {title}
      </h1>
      <p className="mt-0.5 text-sm font-medium text-gray">{description}</p>
    </header>
  );
}
