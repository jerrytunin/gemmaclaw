## 2024-10-01 - Prevent Command Injection via execSync
**Vulnerability:** Use of `execSync` with string interpolation for external commands (like `git` or `gh`) allows for potential command injection if parameters (e.g. `targetRepo`, `branchName`) are influenced by external input.
**Learning:** `execSync` executes commands within a shell by default when provided a single string, exposing the app to shell expansion and command injection.
**Prevention:** Use `execFileSync` instead of `execSync`, which accepts the executable and its arguments as an array, explicitly preventing shell expansion and command injection.
