## 2024-05-24 - Command Injection Vulnerabilities
**Vulnerability:** Use of `execSync` with string interpolation across multiple files.
**Learning:** `execSync` evaluates command substitution within strings, making it vulnerable to command injection.
**Prevention:** Strictly use `execFileSync` or `spawnSync` with properly separated argument arrays.
