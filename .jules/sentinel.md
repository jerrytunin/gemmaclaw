## 2023-10-27 - Fix Command Injection in vertex-setup.ts
**Vulnerability:** Command injection due to shell substitution within `execSync` involving user-provided `saKeyPath`.
**Learning:** Avoid `execSync` with complex shell commands and dynamic string interpolation.
**Prevention:** Use `fs.readFileSync` and `JSON.parse` to extract specific config fields, then pass the values natively to the executable via `execFileSync` arguments array to prevent shell expansions.
