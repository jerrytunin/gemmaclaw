## 2025-02-14 - Fix Subprocess Argument Handling
**Vulnerability:** Shell command substitution inside `execSync` with `python3 -c ...` allows possible unexpected shell expansion when parsing a JSON path.
**Learning:** Using string interpolation inside `execSync` exposes the subprocess to the shell. Always use native Node.js API to replace `$(cmd...)` and pass variables via argument arrays.
**Prevention:** Use `execFileSync` instead of `execSync`, and pass commands and arguments in separate array parameters instead of relying on string interpolation.
