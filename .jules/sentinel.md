## 2024-05-15 - Command Injection in `gh pr create` calls

**Vulnerability:** Command injection vulnerability in `src/commands/submit-benchmark.ts` and `src/gemmaclaw/benchmark-kit/upload.ts` due to `execSync` used with dynamic inputs like model name, CPU architecture, and generated body/title for PR creation via the `gh pr create` command. An attacker manipulating result payloads could inject arbitrary shell commands.
**Learning:** `JSON.stringify()` or manual replace (e.g. replacing `"`) is not a safe mechanism to sanitize input for shell execution in `execSync`. Double quotes in Unix shells still evaluate command substitution (e.g., `$(...)` or backticks).
**Prevention:** Always use `execFileSync` or `spawnSync` passing arguments directly to the executable as an array, instead of `execSync` with shell interpolation. `execFileSync` provides the same synchronous error throwing on non-zero exit codes.
