## 2026-07-19 - [CRITICAL] Prevent Command Injection in CLI Utilities

**Vulnerability:** Found `execSync` used with string interpolation for `gh` and `git` commands in `src/commands/submit-benchmark.ts` and `src/gemmaclaw/benchmark-kit/upload.ts`. This poses a command injection risk if user-controlled input (like `branchName`, `targetRepo`, `runId`, etc.) is passed to these scripts without sanitization.
**Learning:** Using `execSync` with strings allows the shell to interpret spaces and special characters. `execFileSync` avoids this by bypassing the shell and explicitly passing arguments.
**Prevention:** Always use `execFileSync` (or `spawnSync`) and pass arguments as an array instead of concatenating strings for `execSync`.
