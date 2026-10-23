## 2023-10-27 - Refactored `execSync` to `execFileSync` to mitigate command injection

**Vulnerability:** Command injection risks existed in CLI commands (`submit-benchmark.ts` and `upload.ts`) and agent runners where variables (like repository targets, branch names, and generated file paths) were insecurely interpolated directly into string arguments passed to `execSync`.
**Learning:** `JSON.stringify()` or naive string replacement (like `replace(/"/g, '\\"')`) are insufficient for sanitizing inputs passed to shell-executing subprocess functions because shells can still evaluate inner structures, command substitution markers, or unexpected variable expansions depending on the host environment context.
**Prevention:** Always strictly use `execFileSync` (or `spawnSync`) instead of `execSync`, passing the executable name as the first argument and all associated parameters safely encapsulated as distinct elements in an array. This explicitly bypasses shell interpretation entirely.
