## 2026-10-10 - Command Injection Prevention

**Vulnerability:** Use of `execSync` with shell argument interpolation (e.g., ``execSync(`gh repo fork ${targetRepo} ...`)``) creates a command injection risk if user input is maliciously crafted.
**Learning:** `execSync` passes strings directly to the shell where backticks, variables, and substitutions can be exploited. Node.js interprets the entire string.
**Prevention:** Always use `execFileSync` or `spawnSync` with properly separated argument arrays to avoid shell evaluation entirely.
