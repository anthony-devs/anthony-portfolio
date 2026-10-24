import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 16, strokeWidth = 2, children, ...rest }: P) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ChevronRight = (p: P) => (
  <Base {...p}>
    <path d="m9 18 6-6-6-6" />
  </Base>
);
export const ChevronLeft = (p: P) => (
  <Base {...p}>
    <path d="m15 18-6-6 6-6" />
  </Base>
);
export const Check = (p: P) => (
  <Base {...p}>
    <path d="m5 12 5 5L20 7" />
  </Base>
);
export const Briefcase = (p: P) => (
  <Base {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </Base>
);
export const Pin = (p: P) => (
  <Base {...p}>
    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </Base>
);
export const Mail = (p: P) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Base>
);
export const GitHub = (p: P) => (
  <Base {...p}>
    <path d="M9 19c-4 1.5-4-2-6-2.5M15 22v-3.5a3 3 0 0 0-.9-2.4c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.6 0C5.8 1.9 4.7 2.2 4.7 2.2a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3.2 9.4c0 5.2 3.1 6.4 6.1 6.7a3 3 0 0 0-.9 2.4V22" />
  </Base>
);
export const LinkedIn = (p: P) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
  </Base>
);
export const Chat = (p: P) => (
  <Base {...p}>
    <path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.4L3 21z" />
  </Base>
);
export const XIcon = (p: P) => (
  <Base {...p}>
    <path d="M4 4l16 16M20 4L4 20" />
  </Base>
);
export const Instagram = (p: P) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </Base>
);
