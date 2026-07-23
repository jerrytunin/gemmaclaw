## 2023-10-27 - Shell Command Injection via execSync
**Vulnerability:** Shell command injection in `gh pr create` calls using `execSync` with string interpolation of user-controlled or potentially untrusted data.
**Learning:** Using `JSON.stringify()` or string interpolation to sanitize input for shell execution (like `execSync`) is not safe. Double quotes in Unix shells still evaluate command substitution (e.g., `$(...)` or backticks).
**Prevention:** Always strictly use `execFileSync` or `spawnSync` with an array of arguments, which avoids executing through a shell and directly passes arguments to the executable.
