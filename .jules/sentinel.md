## 2025-02-09 - Shell Command Injection Risk via execSync
**Vulnerability:** Usage of `execSync` with string interpolation for external commands (like `gh`, `git`) is susceptible to command injection if variables are improperly sanitized.
**Learning:** Node.js executes `execSync` via a shell wrapper, passing arbitrary arguments to a shell context where characters like quotes or command substitution backticks may be evaluated.
**Prevention:** Use `execFileSync` to pass command executables and an array of arguments, eliminating shell interpolation completely.
