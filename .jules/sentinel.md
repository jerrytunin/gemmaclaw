## 2024-05-15 - Migrate execSync to execFileSync for better security
**Vulnerability:** Improper subprocess argument handling (potential command injection) with `execSync` via unsanitized strings or shell substitutions.
**Learning:** Using `execFileSync` forces strictly separated argument arrays and removes reliance on a shell, avoiding unexpected execution of command injections.
**Prevention:** Always use `execFileSync` or `spawnSync` instead of `execSync` for arbitrary arguments.
