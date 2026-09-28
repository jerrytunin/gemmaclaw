## 2024-05-24 - Improper Subprocess Argument Handling
**Vulnerability:** Usage of `execSync` with unsanitized arguments constructed via string interpolation when executing external tools (e.g., `gh` and `git`).
**Learning:** `execSync` evaluates the entire string in a shell context, making it susceptible to improper argument parsing or unexpected shell expansions. In files like `src/gemmaclaw/benchmark-kit/upload.ts` and `src/commands/submit-benchmark.ts`, dynamic data is interpolated into shell commands.
**Prevention:** Always use `execFileSync` (or `spawnSync` with separated arguments) for external commands to ensure strict argument separation and bypass shell parsing completely, or carefully validate inputs.
