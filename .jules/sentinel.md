## 2025-02-23 - Command Injection via execSync with JSON.stringify
**Vulnerability:** Shell command injection risk existed when passing user-derived benchmark data into `gh pr create` via `execSync` string interpolation.
**Learning:** Using `JSON.stringify()` or `.replace(/"/g, '\\"')` is not a safe mechanism to sanitize input for shell execution. Double quotes in Unix shells still evaluate command substitution (e.g., `$(...)` or backticks).
**Prevention:** Always strictly use `execFileSync` or `spawnSync` with properly separated argument arrays instead of string interpolation for shell commands.
