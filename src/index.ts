#!/usr/bin/env node

import { intro, outro, spinner } from "@clack/prompts";
import { execa } from "execa";

const s = spinner();

intro(`sparkle-1`);

s.start("Creating sparkle...");
await execa("pnpx", [
  "create-next-app@latest",
  "sparkle-1",
  "--ts",
  "--tailwind",
  "--eslint",
  "--app",
  "--no-src-dir",
  "--turbopack",
  "--import-alias",
  "@/*",
  "--skip-install",
  "--disable-git"
]);
s.stop("Sparkle created!");

outro(`You're all set!`);
