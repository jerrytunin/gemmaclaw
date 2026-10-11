## 2024-10-11 - [Critical] Improper subprocess argument handling
**Vulnerability:** Found `execSync` being used with string interpolation in `src/commands/submit-benchmark.ts`, creating potential for unexpected shell expansions.
**Learning:** Using `execSync` with template literals allows user-controlled or external data to be evaluated by the shell.
**Prevention:** Always use `execFileSync` (or `spawnSync`) with a properly separated array of arguments for external command execution.
