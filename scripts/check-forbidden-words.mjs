#!/usr/bin/env node
/**
 * Forbidden words audit for Elephants Partners landing.
 * Run: node scripts/check-forbidden-words.mjs
 *
 * These words must NEVER appear anywhere on the site — in text, alt, JSON-LD, meta.
 * Their presence signals association with prohibited industries.
 */

import { readdir, readFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = join(__dirname, '..', 'src');

const FORBIDDEN = [
  // EN gambling/iGaming
  'igaming',
  'gambling',
  'betting',
  'casino',
  'mostbet',
  '1xbet',
  'parimatch',
  'bookmaker',
  'sportsbook',
  // EN crypto/P2P
  'p2p payments',
  'money transfer',
  'crypto exchange',
  'usdt',
  'cryptocurrency exchange',
  // EN suspicious payment terms
  'account rental',
  'account holder',
  'drop account',
  // RU equivalents
  'гемблинг',
  'казино',
  'ставки',
  'беттинг',
  'трейдер',
  'крипто',
  'кошелёк',
];

const EXTENSIONS = new Set(['.astro', '.ts', '.js', '.mjs', '.json', '.html', '.md', '.txt']);

async function* walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.astro' || entry.name === 'dist') continue;
      yield* walkDir(full);
    } else if (EXTENSIONS.has(extname(entry.name))) {
      yield full;
    }
  }
}

let found = 0;
const results = [];

for await (const filePath of walkDir(SRC_DIR)) {
  const content = await readFile(filePath, 'utf-8');
  const lower = content.toLowerCase();
  for (const word of FORBIDDEN) {
    const idx = lower.indexOf(word.toLowerCase());
    if (idx !== -1) {
      const line = content.slice(0, idx).split('\n').length;
      results.push({ file: filePath.replace(SRC_DIR, 'src'), word, line });
      found++;
    }
  }
}

if (found === 0) {
  console.log('✅ No forbidden words found. Content is clean.');
  process.exit(0);
} else {
  console.error(`\n🚫 FORBIDDEN WORDS FOUND: ${found} hit(s)\n`);
  for (const { file, word, line } of results) {
    console.error(`  ${file}:${line}  →  "${word}"`);
  }
  console.error('\nFix all occurrences before deploying.\n');
  process.exit(1);
}
