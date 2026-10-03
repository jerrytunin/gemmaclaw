## 2024-05-24 - Improper subprocess argument handling
**Vulnerability:** Shell execution enabled via `execSync` allows unexpected shell expansions if variables passed to it contain special characters. Even with `JSON.stringify`, some shell characters might be interpreted.
**Learning:** Always explicitly separate executable arguments and avoid relying on the shell for evaluation unless necessary.
**Prevention:** Use `execFileSync` instead of `execSync` to pass arguments directly to the subprocess without a shell, avoiding risky string interpolation.
