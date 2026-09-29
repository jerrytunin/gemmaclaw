## 2025-05-16 - Prevent Command Injection in CLI Utilities

**Vulnerability:** Shell command injection risk existed due to `execSync` being used with string interpolation and double quotes for shell arguments (e.g. `execSync("gh pr create --title \"" + prTitle + "\"")`).
**Learning:** Node's `execSync` evaluates shell syntax and parses quotes/spaces, allowing attackers to manipulate interpolated variables and run arbitrary shell commands, especially when processing external benchmark payloads.
**Prevention:** Strictly use `execFileSync` or `spawnSync` from `node:child_process` and pass arguments as a separate array. `execFileSync` skips the shell layer, safely handling spaces and special characters natively.
