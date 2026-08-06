## 2024-05-24 - Command Injection in PR Creation
**Vulnerability:** Use of execSync with string interpolation for external shell commands (like gh pr create) using untrusted variables.
**Learning:** Using JSON.stringify or manual quote escaping is insufficient to sanitize input for shell execution in Node.js.
**Prevention:** Always strictly use execFileSync or spawnSync with properly separated argument arrays instead of execSync with string interpolation for external commands.
