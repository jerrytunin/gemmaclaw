## 2025-02-27 - Command Injection in gh pr create
**Vulnerability:** Shell command injection vulnerability in `submit-benchmark.ts` and `upload.ts` via `execSync` where user-controlled variables (`prTitle`, `model.name`, `prBody`) were passed to `gh pr create` using string interpolation and `JSON.stringify()`.
**Learning:** `JSON.stringify()` is not a safe mechanism to sanitize input for shell execution in Node.js. Double quotes in Unix shells still evaluate command substitution (e.g., `$(...)` or backticks).
**Prevention:** Always use `execFileSync` or `spawnSync` with properly separated argument arrays instead of string interpolation for shell commands to prevent command injection, avoiding any shell parsing.
