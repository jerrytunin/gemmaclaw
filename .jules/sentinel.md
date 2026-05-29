## $(date +%Y-%m-%d) - Prevent Command Injection via execSync
**Vulnerability:** Shell Command Injection via unsanitized user inputs within `execSync(string)` strings.
**Learning:** In a codebase using dynamic inputs for tools like Docker, Git, and GitHub CLI, interpolating variables into `execSync` commands risks executing malicious commands appended by untrusted users.
**Prevention:** Migrate all usages of `execSync` to `execFileSync` passing command arguments as an array instead of a single string.
