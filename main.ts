// Real-Life Patch Notes: writes the one-line comedy patch note to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v2.4.1 Fixed: stomach no longer growls when hungry; hunger is now silent and announces itself as sudden rage at 3 PM.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
