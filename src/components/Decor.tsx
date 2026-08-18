import * as React from 'react';

/**
 * Decorative, non-photographic artwork used in place of generic stock imagery.
 * All decorative SVGs are aria-hidden — they carry no informational content.
 */

/** Subtle abstract line-art field used behind dark hero sections. */
export function LineArtField({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fadeRight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#B08D57" stopOpacity="0.5" />
          <stop offset="1" stopColor="#B08D57" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Fine ascending grid lines suggesting growth / capital curves */}
      <g stroke="url(#fadeRight)" strokeWidth="1" fill="none">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1={-100} y1={620 - i * 26} x2={1540} y2={420 - i * 60} />
        ))}
      </g>
      <g stroke="#F7F5F0" strokeOpacity="0.06" strokeWidth="1" fill="none">
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1={i * 110} y1={0} x2={i * 110 + 260} y2={600} />
        ))}
      </g>
    </svg>
  );
}

/**
 * Stylised Dubai skyline silhouette (an original, non-literal illustration).
 * Reads left-to-right: a sail-form tower, clustered high-rises, a central
 * stepped spire, pyramid-topped twin towers and a leaning tower — evoking the
 * Dubai skyline without depicting any specific building precisely.
 */
export function SkylineSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 280"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        {/* Ground line */}
        <rect x="0" y="258" width="1440" height="22" />

        {/* Left low-rise cluster */}
        <rect x="26" y="214" width="34" height="46" />
        <rect x="66" y="196" width="26" height="64" />
        <rect x="98" y="222" width="30" height="38" />

        {/* Sail-form tower (Burj Al Arab motif) */}
        <path d="M150 258 L150 92 Q236 150 236 258 Z" />
        <rect x="148" y="70" width="4" height="26" />

        {/* Mid cluster */}
        <rect x="250" y="188" width="30" height="72" />
        <rect x="286" y="150" width="24" height="110" />
        <rect x="300" y="132" width="4" height="20" />
        <rect x="318" y="204" width="40" height="56" />
        <rect x="366" y="168" width="26" height="92" />
        <rect x="400" y="210" width="34" height="50" />

        {/* Pyramid-topped twin towers (Emirates Towers motif) */}
        <path d="M452 258 L452 150 L470 122 L488 150 L488 258 Z" />
        <path d="M500 258 L500 176 L514 154 L528 176 L528 258 Z" />

        {/* Slender antenna towers */}
        <rect x="560" y="150" width="22" height="110" />
        <rect x="569" y="120" width="4" height="30" />
        <rect x="592" y="196" width="30" height="64" />

        {/* Central stepped spire (Burj Khalifa motif) */}
        <path d="M686 258 L686 158 L693 158 L693 120 L699 120 L699 86 L703 86 L703 52 L706 30 L709 52 L709 86 L713 86 L713 120 L719 120 L719 158 L726 158 L726 258 Z" />

        {/* Right of spire */}
        <rect x="752" y="176" width="34" height="84" />
        <rect x="794" y="150" width="26" height="110" />

        {/* Slender tower with a stepped crown */}
        <rect x="838" y="150" width="26" height="110" />
        <rect x="846" y="132" width="10" height="18" />

        {/* Right cluster */}
        <rect x="900" y="200" width="34" height="60" />
        <rect x="942" y="160" width="26" height="100" />
        <rect x="952" y="140" width="4" height="20" />
        <rect x="978" y="214" width="40" height="46" />
        <rect x="1026" y="182" width="28" height="78" />
        <rect x="1062" y="150" width="30" height="110" />
        <path d="M1100 258 L1100 168 L1114 148 L1128 168 L1128 258 Z" />
        <rect x="1146" y="196" width="34" height="64" />
        <rect x="1188" y="164" width="26" height="96" />
        <rect x="1198" y="140" width="4" height="24" />
        <rect x="1224" y="212" width="40" height="48" />
        <rect x="1272" y="184" width="26" height="76" />
        <rect x="1308" y="208" width="34" height="52" />
        <rect x="1350" y="192" width="26" height="68" />
        <rect x="1386" y="222" width="30" height="38" />
      </g>
    </svg>
  );
}

/**
 * A row of pointed arches — a restrained architectural motif (a subtle nod to
 * the region) used as a section accent. Thin gold stroke, no fill.
 */
export function ArchesMotif({ className = '', count = 5 }: { className?: string; count?: number }) {
  const width = 100;
  const gap = 16;
  const total = count * width + (count - 1) * gap;
  return (
    <svg
      className={className}
      viewBox={`0 0 ${total} 120`}
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#B08D57" strokeWidth="1.5">
        {Array.from({ length: count }).map((_, i) => {
          const x0 = i * (width + gap);
          const x1 = x0 + width;
          const xc = x0 + width / 2;
          return (
            <path
              key={i}
              d={`M${x0} 118 L${x0} 60 C${x0} 24 ${xc} 8 ${xc} 8 C${xc} 8 ${x1} 24 ${x1} 60 L${x1} 118`}
            />
          );
        })}
      </g>
    </svg>
  );
}

/** A single thin ascending line used as a light-section motif. */
export function AscendingRule({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 40"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 34 L360 6" stroke="#B08D57" strokeWidth="1.5" fill="none" />
      <circle cx="360" cy="6" r="3.5" fill="#B08D57" />
    </svg>
  );
}
