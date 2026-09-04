## 2024-05-24 - Command Injection via execSync with JSON.stringify
**Vulnerability:** Command injection when using `execSync` with string interpolation, specifically where `JSON.stringify` was mistakenly thought to be a safe sanitizer for shell execution. Double quotes in Unix shells still evaluate command substitution (e.g., `$(...)` or backticks).
**Learning:** `JSON.stringify` and basic string replacement do not prevent shell command substitution. The shell parses the interpolated strings and executes embedded commands.
**Prevention:** Always use `execFileSync` or `spawnSync` with properly separated argument arrays instead of string interpolation for shell commands.
