## 2024-05-24 - Unsafe Subprocess Execution
**Vulnerability:** Use of `execSync` with unsanitized arguments, risking command injection.
**Learning:** `execSync` is inherently unsafe when passing user inputs, even stringified JSON, because the shell still evaluates command substitutions.
**Prevention:** Always use `execFileSync` (or `spawnSync`) with a strictly separated array of arguments.
