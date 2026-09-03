// Fails the build while scaffold placeholders remain in the site content, so a
// half-filled Experience entry can never reach the live portfolio.
import { readFileSync } from 'node:fs'

const FILE = 'src/data/site.js'
const PATTERNS = [
  { re: /<[^>\n]{3,}>/g, what: 'angle-bracket placeholder' },
  { re: /\b20XX\b/g, what: 'unset year (20XX)' },
]

// Blank out comment lines first — notes about placeholders are not placeholders.
const src = readFileSync(FILE, 'utf8')
  .split('\n')
  .map((line) => (line.trim().startsWith('//') ? '' : line))
  .join('\n')
const found = PATTERNS.flatMap(({ re, what }) =>
  [...src.matchAll(re)].map((m) => {
    const line = src.slice(0, m.index).split('\n').length
    return `  ${FILE}:${line}  ${what} — ${m[0]}`
  }),
)

if (found.length) {
  console.error(`\n✗ ${found.length} placeholder${found.length > 1 ? 's' : ''} still in ${FILE}:\n`)
  console.error(found.join('\n'))
  console.error('\nFill these in (or delete the entry) before deploying.\n')
  process.exit(1)
}

console.log('✓ no placeholders left in site content')
