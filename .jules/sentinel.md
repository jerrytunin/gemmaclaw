## 2024-08-28 - [Command Injection in execSync]

**Vulnerability:** Found `execSync` commands running shell commands with user-supplied strings directly interpolated (e.g. `execSync(\`gh repo clone ${forkRepo} \`...)`).
**Learning:** This is vulnerable to shell command injection where an attacker could provide inputs designed to execute arbitrary shell commands on the host machine.
**Prevention:** Instead of using `execSync`with strings and risking dangerous shell expansions, always use`execFileSync("executable", ["arg1", "arg2"])`.
