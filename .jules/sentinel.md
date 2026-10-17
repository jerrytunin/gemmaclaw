## 2025-05-18 - Improper Subprocess Argument Handling
**Vulnerability:** Found `execSync` commands dynamically evaluating `targetRepo` and `branchName` with string interpolation instead of using properly isolated subprocess arrays via `execFileSync`.
**Learning:** `execSync` is inherently vulnerable to unexpected shell expansion and potential arbitrary code execution if dynamic input parameters contain unsanitized characters like quotes, semicolons, or command-substitution characters.
**Prevention:** Strictly enforce the use of `execFileSync` or `spawnSync` when spawning child processes, completely separating the executable name from user arguments to prevent them from being evaluated by a shell.
