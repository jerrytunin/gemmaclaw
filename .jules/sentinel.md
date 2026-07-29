## YYYY-MM-DD - [Prevent Command Injection]
**Vulnerability:** String interpolation was used directly inside `execSync` which allowed command injection via variables like `ghUser`, `branchName` and `tmpDir` which may include user input or malicious paths.
**Learning:** We must not use string interpolation directly into `execSync`, instead using `execFileSync` to explicitly pass argument boundaries when calling system binaries (like `gh`, `git`).
**Prevention:** Use `execFileSync` from the `node:child_process` library with an argument array instead of string-based arguments.
