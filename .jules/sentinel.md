## 2024-05-29 - Improper subprocess argument handling
**Vulnerability:** Improper subprocess argument handling via interpolated strings in execSync for external commands, specifically when attempting to escape using JSON.stringify.
**Learning:** Using JSON.stringify() is not a structural mechanism to format input for shell execution in execSync, as Unix shells still evaluate shell structures like backticks.
**Prevention:** Always strictly use execFileSync with properly separated argument arrays instead of string interpolation for external command execution.
