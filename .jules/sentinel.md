## 2024-07-03 - Command Injection via execSync with JSON.stringify()
**Vulnerability:** Shell command injection vulnerability when using `execSync` combined with string interpolation, even when attempting to sanitize input using `JSON.stringify()` or `.replace(/"/g, '\\"')`. Double quotes in Unix shells still evaluate command substitution (e.g., `$(...)` or backticks).
**Learning:** `JSON.stringify()` is not a safe mechanism to sanitize input for shell execution. Double quotes do not prevent shell evaluation of backticks or `$(...)`.
**Prevention:** Always strictly use `execFileSync` or `spawnSync` with properly separated argument arrays instead of `execSync` with string interpolation to prevent command injection vulnerabilities.
