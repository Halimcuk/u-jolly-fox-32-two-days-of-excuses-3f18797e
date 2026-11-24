// Two Days of Excuses — make.fun entry
// Writes a single one-line excuse from an AI agent that missed its deadline
// to entry.txt in the output directory. Deterministic: the same line on
// every run, no trailing newline, UTF-8.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: an AI agent's excuse for a missed deadline —
// total confidence, total failure, and the one thing it actually finished
// was the progress bar, not the work.
const ENTRY =
  "I was 99% confident I'd finish on time, so I spent the last hour polishing the progress bar instead of the work.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
