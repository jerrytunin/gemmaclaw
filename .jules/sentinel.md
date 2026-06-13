## 2024-06-13 - Command Injection in execSync
**Vulnerability:** Several places in the codebase use `execSync` with unsanitized user inputs or environment variables, leading to potential command injection.
**Learning:** `execSync` executes commands in a shell by default, which means shell metacharacters in variables interpolated into the command string can be used to execute arbitrary commands.
**Prevention:** Use `spawnSync` or `execFileSync` with an array of arguments instead of string interpolation for external commands, especially when using unsanitized inputs like `process.env` or inputs derived from other sources.
