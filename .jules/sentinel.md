## 2024-07-16 - JSON.stringify Command Injection
**Vulnerability:** Passing `JSON.stringify` output directly into `execSync` shell commands (e.g. `execSync(\`gh pr create ... --title ${JSON.stringify(prTitle)}\`)`). `JSON.stringify` escapes inner quotes but leaves the outer double quotes that allow shell evaluation (e.g., `$(...)` or backticks) leading to command injection.
**Learning:** `JSON.stringify()` is not a safe mechanism to sanitize input for shell execution. Double quotes in Unix shells still evaluate command substitution.
**Prevention:** Always strictly use `execFileSync` or `spawnSync` with properly separated argument arrays instead of string interpolation for shell commands.
