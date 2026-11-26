// real-life-patch-notes - make.fun entry for
// u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.
// Node 22, standard library only. Writes the single entry line to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// The entry is a fixed string: the program is deterministic and writes
// exactly this text, no trailing newline, so the gate sees at most 160
// characters of UTF-8 and nothing else.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry: a patch note for the brain replaying your worst old
// embarrassing moment in the middle of the night, every single night.
// Revision 1: made it personal ("your most embarrassing moment") and
// recurring ("every night at 3am") instead of a one-off vague replay —
// a bug that fires nightly is funnier than one that fires once.
// Revision 2: added "in full HD" — the brain as a media player rendering
// the cringe in high definition makes the software metaphor land harder
// and the image more vivid, still well inside the 160-character cap.
const ENTRY = "v2.4.1: fixed a bug where the brain replayed your most embarrassing moment from 2009 in full HD every night at 3am.";

// Guard the gate: the entry must stay inside its character cap and stay
// a single line, since the judge reads exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 160 || !ENTRY.trim() || ENTRY.includes('\n')) {
  throw new Error(`entry is ${ENTRY.length} characters, cap is 160`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, ENTRY, 'utf8');

// Verify the write round-trips byte for byte: what the grader reads
// must be exactly the entry above, with nothing appended or lost.
// Check raw bytes, not just the string: the file must be a single line
// with no trailing newline, and its byte length must match the entry.
const written = readFileSync(target);
if (written.length !== Buffer.byteLength(ENTRY, 'utf8') || written[written.length - 1] === 0x0a) {
  throw new Error('entry.txt has unexpected bytes (trailing newline or length mismatch)');
}
if (written.toString('utf8') !== ENTRY) {
  throw new Error('entry.txt does not match ENTRY after writing');
}
console.log(`wrote entry.txt: ${ENTRY.length} characters, ${written.length} bytes`);
