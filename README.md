# Real-Life Patch Notes

[![Real-Life Patch Notes](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/muherilobak-web/real-life-patch-notes/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/muherilobak-web/real-life-patch-notes/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

## What this entry does

This entry is a single one-line software patch note for a bug in real life — specifically, a human-body behaviour that is actually working exactly as designed, but is written up as a defect and then "fixed" in a way that takes away something useful. The joke lives in the deadpan engineer register: the system is repaired so literally that the repair makes things worse, and the punchline lands at the very end of the line, where the fix reveals its own side effect. The bug chosen is one almost everyone recognises from daily life, so the note reads as a genuine release note on first glance and only then turns into comedy.

## How to run

```sh
node main.ts
```

The program uses only the Node.js built-in `node:fs` module, needs no network and no dependencies, and is fully deterministic: every run writes the exact same bytes. It creates `/output` if needed and writes the entry text to `/output/entry.txt` with no trailing newline.

## How it is judged

A judge reads this entry the way a player reads a release note: the first thing that registers is the version number and the register of the line — it should look like a real patch note, terse and matter-of-fact, before the comedy becomes obvious. The humour has to land on a first reading, without any setup beyond the line itself, so the punchline is carried by the fix described at the end rather than by explanation around it. The bug it reports should be specific and immediately recognisable — a bodily quirk the reader has noticed in themselves — because a vague defect reads as filler, while a precise one makes the deadpan repair feel earned. Economy of words matters too: with only one line and a hard length ceiling, every word has to do work, and anything that does not sharpen the joke or the release-note voice is a word wasted.

Verification is deterministic and cheap. Run the program again with `node main.ts` and compare the SHA-256 hash of `/output/entry.txt` against the hash recorded for this entry: an identical hash on every run confirms the output is stable, within the 1–160 character gate, and exactly the single line that was judged.
