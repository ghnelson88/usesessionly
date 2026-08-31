/**
 * Regenerate every raster favicon from public/favicon.svg.
 *
 * Run: node scripts/build-favicons.mjs
 *
 * WHY THIS IS A SCRIPT AND NOT FIVE HAND-MADE FILES. Before 2026-08-30 the
 * five icons in public/ were the React Router starter template's logo, and they
 * had been serving from usesessionly.com since February. They were wrong
 * together and would have had to be replaced together; doing that by hand once
 * is how they end up inconsistent the next time the mark changes. One SVG is
 * the source, everything else is derived, and re-running this is the whole
 * update procedure.
 *
 * The .ico is assembled by hand because sharp does not emit ICO. That is fine:
 * an .ico is a 6 byte header, a 16 byte directory entry per image, and the
 * payloads, and since Vista the payload may be a PNG rather than a BMP. We
 * write two PNG entries (16 and 32) which is what a browser actually reads.
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const pub = path.join(here, "..", "public");
const svg = readFileSync(path.join(pub, "favicon.svg"));

/** density scales the SVG rasterisation so small sizes stay crisp. */
const png = (size) =>
  sharp(svg, { density: Math.max(72, size * 6) })
    .resize(size, size, { fit: "contain" })
    .png({ compressionLevel: 9 })
    .toBuffer();

function ico(entries) {
  // ICONDIR: reserved(2) = 0, type(2) = 1 (icon), count(2)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(entries.length, 4);

  let offset = 6 + entries.length * 16;
  const dir = [];
  for (const { size, data } of entries) {
    const e = Buffer.alloc(16);
    // 256 is encoded as 0 in a single byte; we never emit 256 here.
    e.writeUInt8(size >= 256 ? 0 : size, 0); // width
    e.writeUInt8(size >= 256 ? 0 : size, 1); // height
    e.writeUInt8(0, 2); // palette count
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // colour planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    dir.push(e);
  }
  return Buffer.concat([header, ...dir, ...entries.map((e) => e.data)]);
}

const targets = [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["apple-touch-icon.png", 180],
];

for (const [name, size] of targets) {
  writeFileSync(path.join(pub, name), await png(size));
  console.log(`  wrote ${name} (${size}x${size})`);
}

const icoBuf = ico([
  { size: 16, data: await png(16) },
  { size: 32, data: await png(32) },
]);
writeFileSync(path.join(pub, "favicon.ico"), icoBuf);
console.log(`  wrote favicon.ico (16 + 32, ${icoBuf.length} bytes)`);
