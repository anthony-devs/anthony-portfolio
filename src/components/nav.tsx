import Link from "next/link";
import { site } from "@/content/site";
import { Briefcase, Check, ChevronRight } from "./icons";
import { IconPill } from "./ui";

export function Nav({ crumb }: { crumb?: string }) {
  return (
    <header className="border-b border-line">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-6 py-[18px]"
      >
        <Link href="/" className="flex items-center gap-2.5 font-mono text-[15px] font-semibold text-fg!">
          <span
            aria-hidden="true"
            className="flex size-[30px] items-center justify-center rounded-full bg-accent text-xs font-bold text-ink"
          >
            AU
          </span>
          {site.handle}
          {crumb && <span className="font-normal text-muted">/ {crumb}</span>}
        </Link>
        <div className="flex flex-wrap items-center gap-2.5">
          {!crumb && (
            <>
              <IconPill href="/#work" icon={ChevronRight}>
                See my work
              </IconPill>
              <IconPill href="/#services" icon={Briefcase}>
                Services
              </IconPill>
            </>
          )}
          <IconPill href="/#contact" icon={Check}>
            Book a call
          </IconPill>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 px-6 py-5 text-[13px] text-muted">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span className="font-mono">built and designed by me</span>
      </div>
    </footer>
  );
}
