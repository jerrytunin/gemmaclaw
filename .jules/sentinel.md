## 2026-05-28 - Refactor execSync to execFileSync
**Vulnerability:** Use of `execSync` with string interpolation for executing shell commands, potentially allowing command injection.
**Learning:** Shell commands should use `execFileSync` to avoid shell evaluation of untrusted arguments.
**Prevention:** Prefer `execFileSync` over `execSync` in child_process calls, especially when user inputs are involved.
