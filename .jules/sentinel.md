## 2024-05-24 - Command Injection in PR Creation

**Vulnerability:** In `src/commands/submit-benchmark.ts` and `src/gemmaclaw/benchmark-kit/upload.ts`, user-provided input (like model name, CPU arch, dataset dir) is unsafely interpolated into a shell command (`execSync`).
**Learning:** `execSync` executes commands within a shell by default when given a string, which means double quotes do not prevent command substitution (e.g. `$(...)` or backticks). Even though `JSON.stringify` or `.replace(/"/g, '\\"')` attempts to sanitize string properties, shell metacharacters can still be evaluated and cause arbitrary code execution.
**Prevention:** Always use `execFileSync` (or `spawnSync`) passing an array of strings as arguments instead of string concatenation when constructing commands with untrusted variables, thereby bypassing shell parsing altogether.
