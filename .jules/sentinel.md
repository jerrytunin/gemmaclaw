## 2025-01-29 - Command Injection in Shell Execution

**Vulnerability:** Use of `execSync` with string interpolation for executing git and gh CLI commands where parameters like branches or repository names could contain malicious input, enabling command injection.
**Learning:** `execSync` passes the string to a shell which evaluates it. While shell-specific escaping exists, it is often missed or brittle.
**Prevention:** Always strictly use `execFileSync` (or `spawnSync`) with a properly separated arguments array instead of `execSync` when executing external commands.
