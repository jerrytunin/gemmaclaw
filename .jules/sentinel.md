## 2025-02-12 - Prevent Command Injection via execSync
**Vulnerability:** Command injection vulnerability due to the use of `execSync` with unsanitized string inputs (like github repo names or hardware configurations) being passed into template literals for shell command execution.
**Learning:** Node.js `execSync` passes the entire command string to a shell, making it inherently vulnerable if any part of the string contains unescaped malicious characters.
**Prevention:** Always use `execFileSync` (or `spawnSync`) instead of `execSync`, ensuring that arguments are properly separated into an array. This prevents shell expansion and execution of embedded commands. Note that `execFileSync` does not invoke a shell, so shell-specific features (like `&&`, `|`, or `>`) will not work directly.
