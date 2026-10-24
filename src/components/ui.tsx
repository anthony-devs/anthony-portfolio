import Link from "next/link";
import type { ComponentType, ReactNode } from "react";

/** Thin green rule + lowercase heading, as in the design. */
export function SectionHeading({
  id,
  children,
  aside,
}: {
  id: string;
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div aria-hidden="true" className="h-px w-[140px] bg-accent" />
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 id={id} className="m-0 text-[30px] font-normal">
          {children}
        </h2>
        {aside}
      </div>
    </div>
  );
}

/** Pill button with a green icon circle (nav style). */
export function IconPill({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="press flex min-h-11 items-center gap-2.5 rounded-full border border-line-strong bg-panel py-1.5 pl-1.5 pr-4 text-[15px] text-fg! hover:border-accent"
    >
      <span aria-hidden="true" className="flex size-7 items-center justify-center rounded-full bg-accent text-ink">
        <Icon size={14} strokeWidth={3} />
      </span>
      {children}
    </Link>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line-strong bg-panel px-2.5 py-1 font-mono text-xs text-soft">
      {children}
    </span>
  );
}

/** Grey box shown until you add a real image. */
export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className={`flex items-center justify-center border border-line bg-raised font-mono text-xs text-muted ${className}`}
    >
      [{label.toUpperCase()}]
    </div>
  );
}
