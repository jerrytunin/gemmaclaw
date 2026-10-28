## 2025-02-14 - Subprocess command execution improvements
**Vulnerability:** Use of execSync can sometimes lead to security risks like command injection.
**Learning:** execFileSync is safer for executing external commands directly as it passes arguments in an array without shell parsing, preventing command injection vulnerabilities. However, it requires careful argument separation.
**Prevention:** Prefer using execFileSync with an argument array instead of execSync with string interpolation for external commands.
