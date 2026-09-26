## 2024-05-24 - Improper Subprocess Argument Handling
**Vulnerability:** Improper subprocess argument handling risk via string interpolation in child_process `execSync`.
**Learning:** Shell evaluation in `execSync` can be manipulated if inputs aren't safely handled.
**Prevention:** Always use `execFileSync` with explicit argument arrays instead of `execSync` with string interpolation for external commands.
