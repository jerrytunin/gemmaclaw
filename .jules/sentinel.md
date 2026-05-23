## 2025-02-14 - Prevent Command Injection with execFileSync
**Vulnerability:** Shell command injection vulnerability via `execSync` with string interpolation.
**Learning:** Using `execSync` with user-controlled or variable input inside string interpolation can lead to command injection if the input is not sanitized, as the command is evaluated by the shell.
**Prevention:** Always use `execFileSync` instead of `execSync` when running external commands, and pass arguments as an array rather than a single string. This bypasses the shell completely, ensuring arguments are passed safely to the executable.
