## 2025-05-20 - Prevent Command Injection with execFileSync
**Vulnerability:** Shell command injection risk via `execSync` string interpolation in CLI submission workflows (e.g. `src/commands/submit-benchmark.ts`).
**Learning:** Passing a full command string to `execSync` invokes the shell, meaning any interpolated variables (like branch names, repo names, or dataset paths) could be manipulated to execute arbitrary shell commands.
**Prevention:** Use `execFileSync` (or `spawnSync`) and pass the executable separately from an array of its arguments. This bypasses the shell entirely, neutralizing command injection risks.
