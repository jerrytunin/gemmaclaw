## 2024-05-15 - Command Injection via JSON.stringify() in execSync
**Vulnerability:** Shell command execution was interpolating user-controlled inputs via `JSON.stringify()` strings.
**Learning:** Using `JSON.stringify()` inside `execSync(..., { shell: true })` or default string execution is not a safe mechanism to sanitize input, as double quotes in Unix shells still evaluate command substitution (e.g., `$(...)` or backticks).
**Prevention:** Always strictly use `execFileSync` or `spawnSync` with properly separated argument arrays to avoid invoking a shell.
