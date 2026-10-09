## 2025-02-19 - Improper subprocess argument handling in benchmark CLI

**Vulnerability:** Shell execution tools (e.g., `gh`, `git`) were invoked using `execSync` with unsanitized dynamic user inputs (like repository names or model metadata) interpolated directly into the command string. Furthermore, `JSON.stringify()` was incorrectly relied upon to sanitize shell inputs.
**Learning:** Double quotes in Unix shells (even when output by `JSON.stringify`) still evaluate command substitutions (like `$(...)` or backticks). Passing unsanitized metadata to a shell string directly exposes the application to arbitrary shell command execution.
**Prevention:** Always use `execFileSync` or `spawnSync` and separate the executable name from its arguments into an array, bypassing the system shell entirely and preventing argument injection or command substitution.
