## 2025-02-14 - Replace execSync with execFileSync for OS Commands
**Vulnerability:** The codebase uses `execSync` with string interpolation for executing shell commands (e.g. `gh`, `git`, `docker`). If the interpolated strings contain shell metacharacters, this results in command injection.
**Learning:** External variables (such as repository names or branch names) combined with shell string execution create easy command injection vectors. `execSync` runs the command inside a shell environment which enables chaining and other malicious behaviors.
**Prevention:** Prefer `execFileSync` (or `spawnSync`) which takes an array of arguments, bypassing the shell completely and making command injection practically impossible.
