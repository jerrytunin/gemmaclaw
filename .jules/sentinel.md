## 2024-05-24 - Improper Argument Handling in Child Processes

**Vulnerability:** Found multiple usages of `execSync` with unsanitized variables forming the shell command (e.g. `execSync(\`gh pr create --title \${prTitle}\`)`). This allows command injection if input contains shell metacharacters.
**Learning:** Node's `execSync`invokes a shell which interprets arguments blindly. Escaping strings or depending on`JSON.stringify`does not provide robust protection against injection.
**Prevention:** Always use`execFileSync`instead of`execSync` when running known external binaries. Explicitly pass arguments as an array to prevent shell parsing and potential command injection vulnerabilities.
