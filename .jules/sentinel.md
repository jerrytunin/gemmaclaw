## 2025-02-14 - Replace execSync with execFileSync to prevent Command Injection

**Vulnerability:** Usage of `execSync` with shell command string interpolation containing unsanitized variables (like `branchName`, `targetRepo`, `prBody` and `ghUser`) can lead to Command Injection vulnerabilities.
**Learning:** `execSync` evaluates the string within a shell, which exposes the system to command substitution or injection if the variables are not correctly escaped.
**Prevention:** Always strictly use `execFileSync` or `spawnSync` with properly separated argument arrays instead of string interpolation for shell commands.
