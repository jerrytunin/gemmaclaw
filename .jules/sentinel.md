## 2024-05-10 - Command Injection in Benchmark Upload
**Vulnerability:** Command injection vulnerability due to improper handling of dynamic strings in `execSync` calls in `src/commands/submit-benchmark.ts` and `src/gemmaclaw/benchmark-kit/upload.ts`.
**Learning:** Node.js `execSync` is inherently vulnerable to shell injection when interpolating untrusted or dynamic strings (even partially trusted ones like file paths or titles) directly into shell commands. Using `execFileSync` cleanly bypasses shell evaluation entirely.
**Prevention:** Strictly use `execFileSync` or `spawnSync` instead of `execSync` for shell commands to prevent arbitrary execution, passing arguments as explicit array elements.
