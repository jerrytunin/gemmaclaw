## 2025-02-14 - Fix command injection risk in benchmark submit
**Vulnerability:** Command injection risk in `src/commands/submit-benchmark.ts` where `JSON.stringify()` was used to sanitize inputs like `prTitle` for shell execution via `execSync`. Double quotes in Unix shells still evaluate command substitutions (e.g., `$(...)` or backticks).
**Learning:** `JSON.stringify()` is not a safe mechanism to sanitize input for shell execution. Also, using string interpolation with `execSync` for external tools like `gh` and `git` is inherently risky when dealing with dynamic data.
**Prevention:** Always use `execFileSync` or `spawnSync` with a properly separated array of arguments instead of `execSync` with string interpolation.
