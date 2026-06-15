## 2025-02-28 - Command Injection in Git/GH Operations

**Vulnerability:** Shell command injection risk existed where user-provided input (like branch names, repo targets, run IDs) was concatenated directly into `execSync()` string arguments when invoking external tools (`gh` and `git`) to submit benchmarks.
**Learning:** Even internal build or pipeline scripts that wrap external tools are susceptible to injection if parameters originate from an unverified source and use the string-command form of `execSync()`.
**Prevention:** Always execute external commands using `execFileSync` or `spawnSync` with explicitly separate array arguments for the binary and each parameter. Avoid string interpolating untrusted variables directly into shell execution streams.
