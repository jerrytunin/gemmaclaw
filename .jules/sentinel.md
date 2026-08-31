## 2024-05-27 - [Migration to execFileSync]
**Vulnerability:** Command injection vulnerability when passing string inputs to `execSync`.
**Learning:** In Node.js, `execSync` executes commands via a shell which allows shell metacharacters to perform unintended actions if inputs are not properly sanitized.
**Prevention:** Use `execFileSync` instead, passing arguments as an array which bypasses the shell entirely. Note that `execFileSync` requires specifying the executable binary as the first argument, and arguments in an array as the second argument.
