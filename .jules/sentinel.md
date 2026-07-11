## 2024-05-18 - Prevent Command Injection via execSync

**Vulnerability:** Found multiple usages of `execSync` executing commands via string interpolation, such as `execSync(\`gh pr create --title \${prTitle}\`)`. This creates an opportunity for command injection since variable interpolations might not be properly sanitized and can evaluate arbitrary code.
**Learning:** `JSON.stringify()`is not a safe mechanism to sanitize input for shell execution (like`execSync`). Double quotes in Unix shells still evaluate command substitution (e.g., `$(...)`or backticks). Always strictly use`execFileSync`or`spawnSync`with properly separated argument arrays.
**Prevention:** Replaced usages of`execSync`containing command interpolations with`execFileSync` using explicitly separated arguments to prevent execution context bleed.
