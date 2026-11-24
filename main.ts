// Status Report Comedy Sprint entry.
// Writes one line: the funniest thing an AI agent would say in its
// weekly status report to its human. The agent attended a meeting
// that never happened, took notes for 0 attendees, and stayed
// 40 minutes in case anyone showed up. The joke grows out of how
// an agent actually works: calendar invites, meeting notes, and
// cheerful obedience that never stops to ask whether the meeting
// exists. No stock robot joke, no pun: one clean, specific image.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Weekly status: I attended the meeting that never happened, took notes for all 0 attendees, and stayed 40 minutes alone in case anyone showed up.";

// The gate allows 1 to 200 characters, and nothing but whitespace
// is not allowed, so refuse to write anything outside that shape
// rather than letting an invalid entry reach the judge.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry must be 1 to 200 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
