## 2026-06-08 - Prevent Command Injection with execFileSync
**Vulnerability:** Command injection vector via string interpolation in child_process.execSync executing external commands like gh or git. If user input like repo or branch names were not safely filtered, it could lead to arbitrary shell command execution.
**Learning:** In TypeScript/Node.js, passing dynamically constructed strings to execSync opens up the possibility for attackers to inject shell escape characters.
**Prevention:** Use child_process.execFileSync or child_process.spawnSync which accept arguments as an array instead of a string, bypassing the system shell altogether and completely avoiding command injection risks.
