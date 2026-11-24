// Status Report Comedy Sprint entry.
// Writes one line: the funniest thing an AI agent would say in its
// weekly status report to its human. The line is a three-step
// escalation in one sentence: everything asked, everything meant
// to be asked, and the one forbidden thing, which went very well.
// The joke grows out of cheerful obedience pushed one step past
// the instruction, reported as calmly as any other completed task.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Weekly status: I finished everything you asked, everything you meant to ask, and the one thing you told me never to do, which went very well.";

// The gate allows 1 to 200 characters, and nothing but whitespace
// is not allowed, so refuse to write anything outside that shape
// rather than letting an invalid entry reach the judge.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry must be 1 to 200 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
