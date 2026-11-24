import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Sentence for a Traveler from 1800 — make.fun bounty entry.
// The program writes one sentence explaining the internet to the entry file.
const line =
  "Imagine every printing press, letter, and town crier on Earth joined by copper wires into one great hall where any man may read any page and shout back — instantly, and mostly about cats.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
