## 2024-05-24 - Unsafe subprocess argument handling in benchmark submissions

**Vulnerability:** The PR creation logic in `src/commands/submit-benchmark.ts` and `src/gemmaclaw/benchmark-kit/upload.ts` uses `execSync` with interpolated strings for `prTitle` and `prBodyFile`. Using `JSON.stringify` on inputs before inserting them into a shell command is not sufficient to prevent command injection or execution, since double quotes in Unix shells still evaluate command substitution (e.g. `$(...)` or backticks).
**Learning:** `JSON.stringify()` is not a safe mechanism to sanitize input for shell execution (like `execSync`). Shells will evaluate substitutions within double-quoted strings.
**Prevention:** Always strictly use `execFileSync` or `spawnSync` with properly separated argument arrays to avoid shell evaluation. Avoid using `execSync` with string interpolation where arguments might contain unvalidated input.
