## 2025-06-23 - Command Injection Risk via execSync
**Vulnerability:** Use of `execSync` with unsanitized arguments (e.g. `execSync(\`gh pr create --repo ${targetRepo} ...\`)`) can lead to command injection if variables like `targetRepo` contain malicious payload.
**Learning:** Shell argument interpolation in `execSync` is fundamentally insecure for dynamic inputs.
**Prevention:** Prefer using `spawnSync` or `execFileSync` passing an array of arguments, which bypasses the shell interpreter entirely, mitigating command injection vulnerabilities.
