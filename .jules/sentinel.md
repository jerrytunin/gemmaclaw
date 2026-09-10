## 2024-05-31 - Command Injection Vulnerabilities in execSync Calls

**Vulnerability:** Use of string concatenation inside `execSync` commands across various benchmark utilities.
**Learning:** Using `execSync` with backticks to inject dynamic, user-controlled values (like branch names, repo names, paths, etc) is prone to command injection and breakage. Replacing `execSync` with `execFileSync` and an array of arguments, or using `spawnSync` is required for safety. Node.js treats the whole first argument to `execFileSync` as the executable unless separated properly into array arguments.
**Prevention:** Strictly enforce `execFileSync` with properly separated argument arrays to avoid the shell parsing variables when making CLI program calls.
