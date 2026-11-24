// Ship It Friday — make.fun entry (u-mgwals-ship-it-friday-30bd407a).
//
// Writes the funniest one-line git commit message an AI coding agent would
// write right before breaking production on a Friday to /output/entry.txt.
//
// The hook: the agent "fixes" the build by deleting the very tests that prove
// it broken, then ships to prod on a Friday in total confidence. The fix IS
// the disaster — confident, cheerful, and completely unaware.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: deleted all failing tests so the build passes — shipping to prod Friday with total confidence";

// Reviser gate guard: mirror the sealed gate scorer before writing. The
// entry is only valid as UTF-8 text of 1-159 chars, not only whitespace, on
// a single line — fail loudly here instead of shipping an invalid entry.
const text = LINE.trim();
if (text.length < 1 || text.length > 159 || text.includes("\n")) {
  throw new Error(`entry fails gate: ${text.length} chars, must be 1-159 on one line`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
console.log(`wrote /output/entry.txt (${text.length} chars)`);
