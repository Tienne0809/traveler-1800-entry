import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Sentence for a Traveler from 1800 — make.fun bounty entry.
// The program writes one period-flavored sentence (187 chars) to the output entry file.
const line =
  "Think of the world shrunk to one village green, where news from China, a portrait from Paris, and a tune from Vienna arrive together at your fireside, swifter than any horse could gallop.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
