## 2025-06-24 - Command Injection in benchmark upload PR creation
**Vulnerability:** Shell command injection in `submit-benchmark.ts` and `upload.ts` due to the use of `execSync` with unsanitized inputs from a submitted benchmark payload (e.g. `prTitle`, `prBody` built from parsed JSON fields).
**Learning:** `execSync` executes a command inside a shell environment when the command is passed as a single string. If any part of the string contains untrusted data, it can result in arbitrary shell execution using shell metacharacters such as `$(...)` or `||`.
**Prevention:** Always prefer executing external commands (like `gh`, `git`) using `execFileSync` or `spawnSync` with an array of arguments, instead of `execSync` with string interpolation.
