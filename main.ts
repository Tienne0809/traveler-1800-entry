// One Sentence for a Traveler from 1800 — make.fun bounty entry.
// The program writes one sentence explaining the internet, in words a
// traveler from the year 1800 could picture, to the output entry file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  `Picture a web of copper wires spanning every kingdom, along which any man's letter, likeness, or whole library may fly swifter than lightning, to be read by all the world at once.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
