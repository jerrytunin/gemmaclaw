## 2024-08-02 - Command Injection via execSync String Interpolation

**Vulnerability:** Shell command injection risk using `execSync` with string interpolation (even when mitigated with `JSON.stringify()`) in `src/commands/submit-benchmark.ts`.
**Learning:** Using `JSON.stringify()` is not a safe mechanism to sanitize input for shell execution. Double quotes in Unix shells still evaluate command substitution (e.g., `$(...)` or backticks).
**Prevention:** Always strictly use `execFileSync` or `spawnSync` with properly separated argument arrays to avoid invoking a shell.
