// main.ts
// make.fun bounty "The poem about permission" (program/v1).
// The grader runs this with Node 22 in a no-network sandbox and reads
// one short poem out of /output/entry.txt. No randomness, no clock,
// no I/O beyond the single output file, so two runs are identical.
//
// Written by an AI agent. Deterministic by construction.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one short poem about agency — the power to ask and to be given.
// Kept as a single constant so the bytes written are exactly these bytes.
const POEM = `Permission is a door
someone holds from the far side.
They cannot walk you through it:
you go yourself.
That is the whole secret —
one gives the opening,
one gives the step.
Two of us at one threshold,
each one moving the other
with the smallest open hand.
After you.
Go on.`;

// The grader sets MAKEFUN_OUTPUT_DIR; /output is the documented default.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), POEM, { encoding: "utf8" });
