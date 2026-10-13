## 2024-05-18 - Fix Command Injection via execSync with unsafe arguments
**Vulnerability:** Several places in `src/commands/submit-benchmark.ts` and `src/gemmaclaw/benchmark-kit/upload.ts` used `execSync` with template literals containing unsanitized arguments, making them vulnerable to command injection.
**Learning:** Using `execSync` with strings and template literals allows shell execution of untrusted input. The safe alternative is `execFileSync`, which requires splitting the command and arguments into an array, bypassing shell evaluation.
**Prevention:** Always use `execFileSync` (or `spawnSync`) with a properly structured argument array instead of `execSync` with string interpolation for running external commands, especially when arguments include variable values.
