## 2024-07-15 - Command Injection via JSON.stringify
**Vulnerability:** Shell command injection in `submit-benchmark.ts` where `gh pr create` uses string interpolation with `JSON.stringify()` for `prTitle` and `prBodyFile` in `execSync`.
**Learning:** `JSON.stringify()` is not a safe mechanism to sanitize input for shell execution (like `execSync`). Double quotes in Unix shells still evaluate command substitution (e.g., `$(...)` or backticks).
**Prevention:** Always strictly use `execFileSync` or `spawnSync` with properly separated argument arrays to avoid shell evaluation.