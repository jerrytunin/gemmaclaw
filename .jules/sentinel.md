## 2025-02-14 - Prevent Command Injection via execSync
**Vulnerability:** Found `execSync` used with string interpolation in `src/commands/submit-benchmark.ts`, passing unsanitized variables (like `targetRepo` and `datasetDir`) into shell commands.
**Learning:** Using `execSync` or `exec` with string interpolation exposes the application to command injection if variables contain shell metacharacters or unexpected input.
**Prevention:** Always use `execFileSync` or `spawnSync` and pass arguments as an array instead of string interpolation to ensure arguments are safely escaped and executed without invoking a shell.
