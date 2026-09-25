## 2025-02-14 - Use execFileSync Instead of execSync
**Vulnerability:** Shell Command Injection via `execSync`
**Learning:** `execSync` executes commands within a shell and is vulnerable to command injection if input containing special characters is included in the string.
**Prevention:** Use `execFileSync` instead. It does not spawn a shell by default and executes the specified file with arguments provided directly as an array. It avoids command injection, unless `shell: true` is explicitly provided.
