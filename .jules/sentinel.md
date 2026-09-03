## 2024-05-23 - Prevent Command Injection via execSync
**Vulnerability:** Use of `execSync` with string concatenation/interpolation allowing for potential command injection.
**Learning:** Node.js `execSync` executes strings within a shell environment by default, making it vulnerable if unvalidated input is included in the command string. Always using `execFileSync` directly with an array of arguments avoids the shell entirely and prevents injection.
**Prevention:** Prefer `execFileSync` or `spawnSync` over `execSync`. Separate the executable and its arguments strictly into an array.
