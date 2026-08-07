## 2024-05-18 - Prevent Command Injection via execFileSync Migration

**Vulnerability:** Command injection risk through string interpolation in child_process.execSync when executing shell commands (like gh and git) with variables containing user-controlled values or benchmark results.
**Learning:** Node.js's execSync passes a single string command directly to the shell, which evaluates all shell expansions and string interpolation issues, posing a major risk if inputs are manipulated. Wrapping arguments with JSON.stringify does not prevent substitution by backticks or `$()`.
**Prevention:** Always use execFileSync or spawnSync rather than execSync. They bypass the shell entirely and pass variables precisely as exact positional arguments, inherently avoiding command injection.
