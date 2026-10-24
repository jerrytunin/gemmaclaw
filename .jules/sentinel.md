## 2024-05-18 - Improper subprocess argument handling in gemmaclaw benchmark submission

**Vulnerability:** In `src/gemmaclaw/benchmark-kit/upload.ts`, `src/commands/submit-benchmark.ts`, `src/commands/benchmark-gemma.ts`, and `src/gemmaclaw/benchmark/agent-runner.ts`, various `execSync` calls execute shell commands by using string interpolation to concatenate arguments, without proper escaping or using argument arrays.
**Learning:** Using `execSync(commandString)` directly passes the string to a shell, making it vulnerable to command injection if any of the interpolated variables are attacker-controlled. Shell execution must be avoided when dealing with variable data.
**Prevention:** Always use `execFileSync` (or `spawnSync`) and pass arguments as an array instead of string concatenation, e.g., `execFileSync("gh", ["repo", "fork", ...])`. Avoid shell wrapping.
