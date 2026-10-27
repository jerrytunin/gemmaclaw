## 2024-05-25 - Fix improper subprocess argument handling
**Vulnerability:** Use of execSync with string interpolation for executing git and gh CLI tools, leading to improper subprocess argument handling.
**Learning:** Shell strings can lead to unexpected shell expansions and lack argument separation compared to safe array-based execution.
**Prevention:** Always use execFileSync or spawnSync with properly separated argument arrays instead of execSync for external commands.
