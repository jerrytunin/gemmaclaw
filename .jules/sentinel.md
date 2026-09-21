## 2025-02-14 - Replace execSync with execFileSync for gh pr create
**Vulnerability:** Command injection vulnerability due to `execSync` usage with string concatenation (using `prBody` built from potentially unsanitized properties from benchmark result JSONs, even if wrapped in double quotes/JSON.stringify).
**Learning:** `JSON.stringify()` is not a safe mechanism to sanitize input for shell execution (like `execSync`). Double quotes in Unix shells still evaluate command substitution (e.g., `$(...)` or backticks). Always strictly use `execFileSync` or `spawnSync` with properly separated argument arrays.
**Prevention:** Migrate from `execSync` to `execFileSync` explicitly passing the executable and arguments array.
