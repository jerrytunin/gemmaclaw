## 2024-05-24 - Command Injection via JSON.stringify in Shell Execution
**Vulnerability:** Shell command injection in `submit-benchmark.ts` and `upload.ts` via `execSync(..., JSON.stringify(payload)...)`.
**Learning:** `JSON.stringify` does not sanitize strings against shell evaluation (e.g., backticks and `$(...)` still evaluate inside double quotes). Node treats the whole interpolated string as a shell command.
**Prevention:** Use `execFileSync` instead of `execSync` and pass arguments as an array instead of string interpolation to prevent shell interpretation entirely.
