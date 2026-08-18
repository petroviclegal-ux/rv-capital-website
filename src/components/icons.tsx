import * as React from 'react';

/**
 * Original, minimalist line icons for sectors and services. Stroke-based,
 * inherit `currentColor`, and sized via `className` (default 1.5px strokes on a
 * 24×24 grid). Purely decorative accents — each is aria-hidden and paired with a
 * visible text label, so they carry no standalone informational meaning.
 */

type IconProps = { className?: string };

function Svg({ children, className = 'h-7 w-7' }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

/* ------------------------------------------------------------------ sectors */

const sectorIcons: Record<string, (p: IconProps) => React.ReactElement> = {
  'banking-financial-services': (p) => (
    <Svg {...p}>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 9.5V19M9 9.5V19M15 9.5V19M19 9.5V19" />
      <path d="M3 21h18" />
    </Svg>
  ),
  'energy-oil-gas': (p) => (
    <Svg {...p}>
      <path d="M12 3c2.5 3 4.5 5.4 4.5 8.5A4.5 4.5 0 0 1 12 16a4.5 4.5 0 0 1-4.5-4.5C7.5 8.4 9.5 6 12 3Z" />
      <path d="M9 21h6" />
      <path d="M12 16v5" />
    </Svg>
  ),
  'consumer-retail': (p) => (
    <Svg {...p}>
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </Svg>
  ),
  'pharmaceuticals-healthcare': (p) => (
    <Svg {...p}>
      <path d="M3 12h4l2-5 3 10 2-5h4" />
      <path d="M19 8v2M18 9h2" />
    </Svg>
  ),
  'real-estate': (p) => (
    <Svg {...p}>
      <path d="M4 21V8l6-4 6 4v13" />
      <path d="M16 21V11l4 2.5V21" />
      <path d="M3 21h18" />
      <path d="M8 12h1M8 16h1M11 12h1M11 16h1" />
    </Svg>
  ),
  'industrials-manufacturing': (p) => (
    <Svg {...p}>
      <path d="M3 21V10l5 3V10l5 3V6l3 2 5-3v13Z" />
      <path d="M3 21h18" />
    </Svg>
  ),
  telecom: (p) => (
    <Svg {...p}>
      <path d="M12 20v-8" />
      <path d="M9 12l3-8 3 8" />
      <path d="M6.5 8.5a7 7 0 0 0 0 8M17.5 8.5a7 7 0 0 1 0 8" />
      <path d="M9 20h6" />
    </Svg>
  ),
  'aviation-logistics': (p) => (
    <Svg {...p}>
      <path d="M3 13l8-2 3-7 2 1-1 5 5-1 1 2-5 2 0 4-2 1-1-4-4 1Z" />
    </Svg>
  ),
};

export function SectorIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = sectorIcons[slug];
  if (!Icon) return null;
  return <Icon className={className} />;
}

/* ----------------------------------------------------------------- services */

const serviceIcons: Record<string, (p: IconProps) => React.ReactElement> = {
  'ma-advisory': (p) => (
    <Svg {...p}>
      <path d="M4 6h6v6a3 3 0 0 1-3 3H4" />
      <path d="M20 18h-6v-6a3 3 0 0 1 3-3h3" />
      <path d="M10 9l4 6" />
    </Svg>
  ),
  'business-sale-acquisition': (p) => (
    <Svg {...p}>
      <path d="M4 8h9l7 4-7 4H4z" />
      <path d="M8 12h.01" />
    </Svg>
  ),
  'corporate-restructuring': (p) => (
    <Svg {...p}>
      <rect x="3" y="4" width="7" height="7" />
      <rect x="14" y="13" width="7" height="7" />
      <path d="M10 7h5v6M14 17H9v-6" />
    </Svg>
  ),
  'corporate-finance-capital-raising': (p) => (
    <Svg {...p}>
      <path d="M4 20V12M9 20V8M14 20v-6M19 20V4" />
      <path d="M4 8l5-4 5 3 5-5" />
    </Svg>
  ),
  'investment-portfolio-advisory': (p) => (
    <Svg {...p}>
      <path d="M12 3v9l7 3" />
      <circle cx="12" cy="12" r="9" />
    </Svg>
  ),
  'market-research-due-diligence': (p) => (
    <Svg {...p}>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M15 15l5 5" />
      <path d="M8 11l2 2 3-4" />
    </Svg>
  ),
};

export function ServiceIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = serviceIcons[slug];
  if (!Icon) return null;
  return <Icon className={className} />;
}
