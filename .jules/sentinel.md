## 2025-02-12 - Command Injection via JSON.stringify in Shell Execution
**Vulnerability:** The `submit-benchmark.ts` command used `JSON.stringify(prTitle)` within an `execSync` shell command. `JSON.stringify` wraps strings in double quotes, which does not prevent command substitution (e.g. `$(...)` or backticks) in Unix shells, leading to arbitrary command injection if the input (like benchmark model name) is attacker-controlled.
**Learning:** Double quotes in bash still evaluate command substitution. `JSON.stringify()` is for JSON, not shell escaping.
**Prevention:** Always use `execFileSync` or `spawnSync` with properly separated argument arrays instead of string concatenation/interpolation for shell commands.
