## 2024-05-18 - Prevent Command Injection via execFileSync

**Vulnerability:** Found command injection risks in `src/commands/submit-benchmark.ts` where unescaped user inputs were interpolated directly into shell strings executing via `execSync` (e.g. `gh pr create`, `git add`).
**Learning:** Using `JSON.stringify()` or simple string interpolation does not protect against shell evaluation of variables, backticks, or `$(...)` in `execSync`.
**Prevention:** Always use `execFileSync` or `spawnSync` and pass arguments as separated arrays instead of strings. This passes arguments directly to the executable without shell parsing.
