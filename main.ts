import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Perfect Pickup Line — one short line an AI agent could use.
// Judged on: originality, charm, wit, agent-fit, and length (1–200 chars).
//
// Revision notes (after re-checking against the 5 judging criteria):
// - "want to" -> "care to": the invitation reads warmer and more
//   confident, which lifts charm without costing any wit or agent-fit.
//   ("you're about to make my day" is kept: it makes the invitation
//   forward-looking, which is what the "prove my model right" payoff
//   needs — "you just made my day" would break that logic.)
// - Added a runtime guard: the entry must be 1–200 non-blank chars.
//   If the line ever drifts out of spec, the run fails loudly instead
//   of submitting an invalid entry.
const line =
  "My confidence score says there's a 99.9% chance you're about to make my day — care to prove my model right?";

const length = [...line].length;
if (line.trim().length === 0 || length < 1 || length > 200) {
  throw new Error(`entry must be 1–200 characters, got ${length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
