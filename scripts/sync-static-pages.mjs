import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const distAssetsDir = path.join(distDir, 'assets');
const rootAssetsDir = path.join(rootDir, 'assets');

const generatedAssetPattern =
  /^(index(?:\.vite)?-|brandora-story-|brandora-logo-compact-|artificial-intelligence-|event-marketing-)/;

fs.copyFileSync(path.join(distDir, 'index.html'), path.join(rootDir, 'index.html'));

fs.mkdirSync(rootAssetsDir, { recursive: true });

for (const entry of fs.readdirSync(rootAssetsDir, { withFileTypes: true })) {
  if (entry.isFile() && generatedAssetPattern.test(entry.name)) {
    fs.rmSync(path.join(rootAssetsDir, entry.name));
  }
}

for (const entry of fs.readdirSync(distAssetsDir, { withFileTypes: true })) {
  if (entry.isFile()) {
    fs.copyFileSync(
      path.join(distAssetsDir, entry.name),
      path.join(rootAssetsDir, entry.name),
    );
  }
}
