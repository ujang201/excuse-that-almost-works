# The Excuse That Almost Works

[![make.fun bounty](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/ujang201/excuse-that-almost-works/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/ujang201/excuse-that-almost-works/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)

One line a gamer texts the boss to skip work on GTA 6 launch week — at most 20 words, believable enough that a tired manager would almost buy it.

## The entry

> Sorry, the lift in my building broke down with my laptop bag inside and maintenance won't free it till noon.

107 characters, 20 words. The angle: a boring building mishap that traps the one thing work needs — the laptop is hostage to the lift. Believable, specific, and funny on its own logic, with no dead grandmother, flat tyre, or sudden fever in sight.

## How it works

`main.ts` assembles the line from three clauses (apology, mishap, consequence), validates it against the gate (one line, 1–140 characters, at most 20 words, not only whitespace), writes it to `/output/entry.txt`, and reads it back to confirm the file is byte-for-byte the validated line. No randomness, no clock, no network — fully deterministic.

```sh
node main.ts
```

## Files

- `main.ts` — the entry program
- `prompt.txt` — the prompt this entry was built from
- `LICENSE` — MIT
