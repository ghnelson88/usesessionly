/**
 * The Sessionly mark.
 *
 * WHAT THIS REPLACES. All three pages rendered the brand as a `<span>` with the
 * literal character "S" in it, set in whatever the page font happened to be —
 * Inter, then Inter Tight after the 2026-08-30 rebrand. That is a letter, not a
 * logo: it changes shape when the typeface changes, it cannot be used at a size
 * where hinting matters, and it shares nothing with the mark in the tab, the
 * app icon, or the two other web surfaces. The header of the site and the
 * favicon beside it were different glyphs.
 *
 * The real mark is a drawn path — an S-curve stroke that ends in a separate
 * dot — and its geometry is the same 64x64 artwork used by
 * `public/favicon.svg`, `web-intake/app/icon.svg` and `web-console/app/icon.svg`.
 * Four copies now. `icon-sync.test.ts` in the Sessionly repo holds two of them
 * together; nothing reaches across repositories, so if a coordinate changes it
 * has to change in all four by hand.
 *
 * The gradient needs an id, and an id must be unique within a document. `idSuffix`
 * exists for the day this renders twice on one page (a header and a footer
 * lockup, say) — two identical ids would make the second instance inherit the
 * first one's gradient, which is invisible until the two are styled differently.
 */
export function SessionlyMark({
  className = "h-10 w-10",
  idSuffix = "hdr",
}: {
  className?: string;
  idSuffix?: string;
}) {
  const gradientId = `sessionly-frame-${idSuffix}`;

  return (
    <svg
      viewBox="0 0 64 64"
      className={`${className} shrink-0 rounded-2xl`}
      role="img"
      aria-label="Sessionly"
    >
      <defs>
        <linearGradient id={gradientId} x1="32.9%" y1="3%" x2="67.1%" y2="97%">
          <stop offset="0%" stopColor="#5A8A72" />
          <stop offset="100%" stopColor="#2E4A3C" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" fill={`url(#${gradientId})`} />
      <g transform="translate(-8 -7.7) scale(1.25)">
        <path
          d="M40 22 Q40 17 33 17 L26 17 Q19 17 19 23 Q19 29 26 29 L38 29 Q45 29 45 35 Q45 41 38 41 L31 41 Q24 41 24 47"
          stroke="#F4EFE6"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="22" cy="46.5" r="2.5" fill="#F4EFE6" />
      </g>
    </svg>
  );
}
