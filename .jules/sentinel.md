## 2025-02-12 - Command Injection via execSync String Interpolation
**Vulnerability:** Widespread use of `execSync` with string interpolation passing user-controlled variables (e.g. repository names, branch names) to shell execution.
**Learning:** `JSON.stringify()` is incorrectly assumed to sanitize inputs for shell commands. Double quotes in Unix shells still evaluate command substitutions, enabling arbitrary command execution.
**Prevention:** Always use `execFileSync` or `spawnSync` with properly separated argument arrays instead of `execSync` with string interpolation to bypass shell evaluation completely.
