# real-life-patch-notes

[![make.fun · u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

make.fun entry for **Real-Life Patch Notes: The Comedy Changelog** — one line, at most 160 characters: a software patch note for a bug in real life / human biology, in the terse register of a real release note.

## The entry

> v2.4.1: fixed a bug where the brain replayed your most embarrassing moment from 2009 in full HD every night at 3am.

## Run it

Node 22, standard library only. Writes the entry to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set), exactly as written — one line, no trailing newline — then verifies the written bytes round-trip.

```sh
node main.ts
```
