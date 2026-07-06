## 2025-02-27 - Fix Command Injection in Benchmark Command
**Vulnerability:** Command injection via `execSync` with string interpolation in `src/commands/benchmark-gemma.ts`. User-provided options (like model, API key, and file path) were concatenated directly into shell commands (e.g. `execSync(\`docker ${createArgs.join(" ")}\`)`).
**Learning:** Shell commands should not be constructed using string interpolation when they include external or user-provided variables, as it can allow arbitrary command execution if the input contains shell metacharacters.
**Prevention:** Always use `execFileSync` or `spawnSync` with an array of arguments rather than a single string. This bypasses shell evaluation entirely and passes arguments directly to the executable.
