## 2025-01-20 - Command Injection via JSON.stringify in Shell Contexts
**Vulnerability:** Shell-based execution functions like `execSync` evaluate command substitutions and backticks even within strings that were sanitized by `JSON.stringify`. `JSON.stringify` encapsulates strings in double quotes, which does not prevent bash from interpreting embedded backticks or command substitutions (`$(...)`).
**Learning:** `JSON.stringify` is NOT a safe sanitization mechanism for any inputs passed to shell interpreters via string interpolation.
**Prevention:** Always use execution functions that skip the shell completely, like `execFileSync` or `spawnSync`, and strictly pass arguments as a separate array of strings rather than a single concatenated string.
