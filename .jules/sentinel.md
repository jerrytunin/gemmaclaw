## 2025-02-18 - Fix Command Injection in gh pr create
**Vulnerability:** Command injection in `gh pr create` command execution due to `execSync` with string interpolation.
**Learning:** Shell-specific escaping (such as manually escaping double quotes) is not robust against command injection. `JSON.stringify` does not properly sanitize shell metacharacters and can still lead to vulnerability in `execSync`.
**Prevention:** Always use `execFileSync` (or `spawnSync`) instead of `execSync`, and separate the executable from its arguments into an array.
