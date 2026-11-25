// The Excuse That Almost Works — entry program.
//
// One job: write the single line a gamer texts the boss to skip work on
// GTA 6 launch week, to /output/entry.txt.
//
// The line is assembled from three clauses — an apology, the boring
// mishap, and the consequence — so it reads like one hurried text, not a
// rehearsed paragraph. It is validated against the gate before it is
// written: one line, 1-140 characters, at most 20 words, never only
// whitespace. No randomness, no clock, no network: the same input always
// produces the same bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// --- the excuse, in the order a thumb types it ---------------------------

const APOLOGY = "Sorry,";
const MISHAP =
  "the lift in my building broke down with my laptop bag inside";
const CONSEQUENCE = "and maintenance won't free it till noon";

// --- assembly ------------------------------------------------------------

function joinClauses(clauses: string[]): string {
  return clauses.join(" ").replace(/\s+/g, " ").trim();
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter((w) => w.length > 0).length;
}

// --- gate: the same limits the sealed scorer enforces --------------------

function validate(text: string): void {
  if (text.length < 1 || text.length > 140) {
    throw new Error(`entry is ${text.length} chars, must be 1-140`);
  }
  if (wordCount(text) > 20) {
    throw new Error(`entry is ${wordCount(text)} words, must be at most 20`);
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

// --- main ----------------------------------------------------------------

const excuse = joinClauses([APOLOGY, MISHAP, CONSEQUENCE]);
validate(excuse);

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, excuse, "utf8");

// Read back what landed on disk: the file the judge sees must be exactly
// the validated line, byte for byte, with no trailing newline added.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== excuse) {
  throw new Error("round-trip check failed: file differs from validated line");
}

console.log(excuse);
console.log(`(${excuse.length} chars, ${wordCount(excuse)} words)`);
