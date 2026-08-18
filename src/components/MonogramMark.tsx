import * as React from 'react';

type MonogramMarkProps = {
  /** Fill colour of the mark. Defaults to the brass/gold accent. */
  color?: string;
  className?: string;
  title?: string;
};

/**
 * RV Capital monogram — an interlaced square-knot mark (a "linked chain" of
 * woven squares). RV Capital and Hefestos Capital share common ownership, and
 * the client has authorised RV Capital's use of this mark; it is reproduced here
 * as clean vector geometry in the brand gold.
 *
 * Rendered as inline SVG (a set of rectangles on a 96×96 grid) so it stays crisp
 * at every size. The same geometry is mirrored in /public/icon.svg and
 * /public/favicon.svg.
 */
const MARK_RECTS: ReadonlyArray<readonly [number, number, number, number]> = [
  [22, 0, 30, 8], [66, 0, 30, 8],
  [22, 8, 8, 34], [44, 8, 8, 12], [66, 8, 8, 34], [88, 8, 8, 22],
  [0, 22, 20, 8], [32, 22, 32, 8], [76, 22, 12, 8],
  [0, 30, 8, 22], [44, 32, 8, 32],
  [8, 44, 34, 8], [54, 44, 42, 8], [88, 52, 8, 22],
  [22, 54, 8, 42], [66, 54, 8, 42],
  [0, 66, 20, 8], [32, 66, 32, 8], [76, 66, 12, 8],
  [0, 74, 8, 22], [44, 76, 8, 20],
  [8, 88, 14, 8], [52, 88, 14, 8],
];

export function MonogramMark({
  color = '#B08D57',
  className,
  title = 'RV Capital monogram',
}: MonogramMarkProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      role="img"
      aria-label={title}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {MARK_RECTS.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} />
      ))}
    </svg>
  );
}
