## 2024-05-18 - Command Injection via execSync and JSON.stringify
**Vulnerability:** Shell evaluation within `execSync` is not prevented by `JSON.stringify()`, as double quotes still permit command substitution. This allowed for arbitrary command injection during `gh pr create`.
**Learning:** `JSON.stringify()` is not a safe mechanism for sanitizing shell input.
**Prevention:** Always strictly use `execFileSync` or `spawnSync` with correctly separated argument arrays (e.g. `execFileSync('gh', ['pr', 'create', ...])`) instead of passing complete command strings to `execSync`.
