## 2026-05-24 - [Fix Command Injection Risk in Benchmark Upload]
**Vulnerability:** Use of `execSync` with string interpolation allowed user-controlled inputs to be evaluated by the shell, leading to possible command injection risks.
**Learning:** In TypeScript/Node.js, spawning processes with `execSync` string interpolation is an anti-pattern. While switching to `execFileSync` mitigates this, take care to remove shell-specific quote escaping since the shell no longer processes arguments.
**Prevention:** Use `execFileSync`, `spawn`, or `spawnSync` and always pass arguments as an array.
