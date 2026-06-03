## 2025-02-23 - Command Injection in GH CLI Upload Tools
**Vulnerability:** Found multiple instances where `execSync` was used with string interpolation to run external commands like `gh` and `git` with un-escaped branch names, PR bodies, and repo targets (e.g. `execSync(\`gh repo fork ${opts.targetRepo} --clone=false\`)`).
**Learning:** Using string interpolation with `execSync` is highly susceptible to command injection if any variable can be manipulated, which is a common failure point for system utilities wrapping shells.
**Prevention:** Always prefer using `spawnSync` or `execFileSync` passing an array of arguments, instead of using `execSync` with a formatted string.
