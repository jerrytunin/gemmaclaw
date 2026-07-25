## 2024-05-28 - Command Injection in benchmark-kit
**Vulnerability:** Use of string interpolation in `execSync` commands within `src/gemmaclaw/benchmark-kit/upload.ts` (e.g., `execSync(\`git checkout -b "${branchName}"\`...`). If parameters like `branchName` or `opts.targetRepo` are manipulated, it could lead to command injection.
**Learning:** `execSync` parses arguments using a shell when provided as a single string, exposing it to command injection. `execFileSync` should be used as it does not spawn a shell by default and takes an array of arguments, preventing injection via shell operators.
**Prevention:** Always use `execFileSync` (or `spawnSync`) with a strict array of arguments when running external commands, especially when involving user inputs or external data.
