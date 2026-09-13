#!/usr/bin/env node
/**
 * Write src/version.ts from package.json (runs as `prebuild`).
 *
 * The SDK identifies itself to the API with a TL-Client header naming the
 * published package version. changesets bumps package.json at release time,
 * so the version is read from there at build time rather than committed:
 * src/version.ts is gitignored and regenerated on every build. The generator
 * in backstage-sdk-tooling writes the same file when it is missing.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));

const content = [
  '/**',
  ' * GENERATED FILE - written from package.json by the prebuild script.',
  ' * Do not edit; do not commit.',
  ' */',
  `export const SDK_NAME = ${JSON.stringify(pkg.name)};`,
  `export const SDK_VERSION = ${JSON.stringify(pkg.version)};`,
  '',
].join('\n');

mkdirSync(join(root, 'src'), { recursive: true });
writeFileSync(join(root, 'src', 'version.ts'), content);
console.log(`[write-version] src/version.ts <- ${pkg.name}@${pkg.version}`);
