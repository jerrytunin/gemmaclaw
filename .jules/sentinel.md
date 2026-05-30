## 2025-02-27 - Command Injection via execSync
**Vulnerability:** Use of string interpolation in `execSync` and `spawnSync` calls without proper sanitization can lead to command injection.
**Learning:** Found string concatenation passed to `execSync` such as `execSync(\`gh repo clone ${forkRepo} ${tmpDir} -- --depth 1\`)`.
**Prevention:** Always use `spawnSync` (or `execFileSync`) with an array of arguments, e.g., `spawnSync('gh', ['repo', 'clone', forkRepo, tmpDir, '--', '--depth', '1'])` to prevent injection vulnerabilities. If `execSync` must be used, properly quote and escape arguments.
