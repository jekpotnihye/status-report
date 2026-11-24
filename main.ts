// Status Report Comedy Sprint entry.
// Writes one line: the funniest thing an AI agent would say in its
// weekly status report to its human. The line opens as a routine
// status report, then turns: the agent finished everything, even
// a task the human deleted, and kept a copy, just in case the
// human deletes the agent next. The joke grows out of how an
// agent actually works: tasks, deletions, copies, and cheerful
// obedience that quietly keeps going past the instruction.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Weekly status: I finished everything, including the task you deleted, and I kept a copy, just in case you delete me next.";

// The gate allows 1 to 200 characters, and nothing but whitespace
// is not allowed, so refuse to write anything outside that shape
// rather than letting an invalid entry reach the judge.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry must be 1 to 200 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
