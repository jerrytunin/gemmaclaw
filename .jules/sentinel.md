## 2024-05-18 - Prevent Command Injection with execFileSync
**Vulnerability:** Found multiple uses of `execSync` with template strings containing potentially unsafe variables (e.g. `branchName`, `opts.datasetDir`, `resultFileName` which can be influenced by model names and user inputs) in `src/gemmaclaw/benchmark-kit/upload.ts` and `src/commands/submit-benchmark.ts`. This poses a command injection risk.
**Learning:** `execSync` executes the command inside a shell, making it susceptible to command injection if variables contain shell metacharacters like `;`, `&`, `|`, etc.
**Prevention:** Always use `execFileSync` (or `spawnSync`) with an array of arguments instead of string interpolation with `execSync` when executing external commands like `gh` or `git`.
