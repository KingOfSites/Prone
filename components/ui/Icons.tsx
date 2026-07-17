import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const icons = {
  handshake: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M11 17 9.5 15.5m4.5 3.5-2-2m5 1-3-3m-8-3L3 8l3-4 4 1 2 1 2-1 4-1 3 4-3.5 3.5" />
      <path d="m6.5 4 5 3M17.5 4l-3 2" />
    </svg>
  ),
  bolt: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  ),
  radar: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M19.07 4.93A10 10 0 1 0 22 12" />
      <path d="M16 8a6 6 0 1 0 2 4" />
      <path d="M12 12 20 4" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  wrench: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.2-.4-.4-2.2 2.6-2.6Z" />
    </svg>
  ),
  wallet: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M3 7a2 2 0 0 1 2-2h12v3" />
      <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-1-1H5" />
      <circle cx="16.5" cy="12.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  ),
  shield: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  car: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M5 11l1.5-4A2 2 0 0 1 8.4 6h7.2a2 2 0 0 1 1.9 1.3L19 11" />
      <path d="M3 16v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-1" />
      <path d="M4 17H3M18 17H6" />
      <circle cx="7.5" cy="17" r="1.6" />
      <circle cx="16.5" cy="17" r="1.6" />
    </svg>
  ),
  moto: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="5.5" cy="16" r="3" />
      <circle cx="18.5" cy="16" r="3" />
      <path d="M5.5 16h6l4-5h3M12 11l-2-3H7" />
      <path d="M16 6h3v2" />
    </svg>
  ),
  truck: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M2 6h11v9H2z" />
      <path d="M13 9h4l3 3v3h-7z" />
      <circle cx="6.5" cy="17" r="1.8" />
      <circle cx="17" cy="17" r="1.8" />
    </svg>
  ),
  trailer: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M2 6h3l1.5 9H3a1 1 0 0 1-1-1V6Z" />
      <path d="M8 15h13V8H6" />
      <circle cx="6" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
      <path d="M8 17.5h7" />
    </svg>
  ),
  fleet: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="8" height="6" rx="1" />
      <rect x="13" y="4" width="8" height="6" rx="1" />
      <rect x="3" y="14" width="8" height="6" rx="1" />
      <rect x="13" y="14" width="8" height="6" rx="1" />
    </svg>
  ),
  lock: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M12 14v2.5" />
    </svg>
  ),
  impact: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M12 3l1.9 4.4 4.6-1.3-1.3 4.6 4.4 1.9-4.4 1.9 1.3 4.6-4.6-1.3L12 22l-1.9-4.7-4.6 1.3 1.3-4.6L2 12l4.4-1.9-1.3-4.6 4.6 1.3L12 3Z" />
    </svg>
  ),
  flame: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M12 3s5 3.7 5 9a5 5 0 0 1-10 0c0-1.9 1-3.1 1.6-3.6.4 1.3 1.6 1.6 1.6 1.6S8.6 6.7 12 3Z" />
    </svg>
  ),
  storm: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M7 14.5a4 4 0 1 1 1.2-7.8A5 5 0 0 1 18 8.5a3.4 3.4 0 0 1-.4 6.8" />
      <path d="M8.5 18l-1 2.5M12.5 18l-1 2.5M16 18l-1 2.5" />
    </svg>
  ),
  users: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.4a3 3 0 0 1 0 5.6M21 20a5.5 5.5 0 0 0-3.6-5.2" />
    </svg>
  ),
  lifebuoy: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="m5.7 5.7 3.3 3.3M15 15l3.3 3.3M18.3 5.7 15 9M9 15l-3.3 3.3" />
    </svg>
  ),
  glass: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M4.5 8 6.5 5h11l2 3v3a2 2 0 0 1-2 2H6.5a2 2 0 0 1-2-2V8Z" />
      <path d="M12 5v8M4.5 8.5h15" />
    </svg>
  ),
  key: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="8" cy="8" r="3.6" />
      <path d="m10.6 10.6 8.4 8.4M16.5 17l2-2M14.5 15l2-2" />
    </svg>
  ),
  user: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20a8 8 0 0 1 16 0" />
    </svg>
  ),
  instagram: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  check: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  ),
  whatsapp: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.83c0 4.54-3.7 8.23-8.25 8.23a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24ZM8.53 6.9c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.16 1.78 2.72 4.32 3.82.6.26 1.07.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.16-.48-.29-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.13-.56.13-.17.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.37-.77-1.87-.2-.48-.4-.42-.55-.43-.14-.01-.31-.01-.48-.01Z" />
    </svg>
  ),
};

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  const Cmp = icons[name];
  return <Cmp {...props} />;
}
