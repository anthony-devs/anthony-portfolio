import { site } from "@/content/site";
import { Chat, GitHub, Instagram, LinkedIn, Mail, XIcon } from "./icons";

const items = [
  { label: "Email", href: site.links.email, Icon: Mail },
  { label: "WhatsApp", href: site.links.whatsapp, Icon: Chat },
  { label: "GitHub", href: site.links.github, Icon: GitHub },
  { label: "LinkedIn", href: site.links.linkedin, Icon: LinkedIn },
  { label: "X", href: site.links.x, Icon: XIcon },
  { label: "Instagram", href: site.links.instagram, Icon: Instagram },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="ct-h"
      className="flex scroll-mt-6 flex-col items-center gap-4 rounded-2xl border border-line bg-panel px-6 py-9 text-center"
    >
      <h2 id="ct-h" className="m-0 text-[30px] font-normal">
        contact me
      </h2>
      <p className="m-0 font-light text-soft">Tell me what you&apos;re building. I reply within a day.</p>
      <a
        href={site.links.bookCall}
        className="press rounded-full bg-accent px-5 py-3 text-[15px] font-semibold text-ink! hover:brightness-110"
      >
        Book a call
      </a>
      <div className="flex flex-wrap justify-center gap-1 rounded-2xl border border-line-strong bg-ink px-3 py-2">
        {items.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            className="press flex min-w-[52px] flex-col items-center gap-1 rounded-lg px-3 py-2 text-[11px] text-soft! hover:bg-panel"
          >
            <Icon size={22} strokeWidth={1.8} className="text-fg" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
