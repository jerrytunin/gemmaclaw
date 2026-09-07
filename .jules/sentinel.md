## 2024-05-24 - [CRITICAL] Command Injection Vulnerability in uploadResult

**Vulnerability:** Command injection exists in `src/gemmaclaw/benchmark-kit/upload.ts` due to the use of string interpolation with `execSync` for shell commands (e.g. `gh pr create ... --title "benchmark: ${anon.model.name} ..."`). Untrusted data from the model name or other hardware fields can inject arbitrary commands.
**Learning:** Node.js `execSync` evaluates the entire string command in a shell, allowing special shell characters (like backticks, semicolons, dollar signs) to execute unexpected commands if user-controlled or hardware-derived properties are included unsanitized in the template string.
**Prevention:** Use `execFileSync` (or `spawnSync`) and pass arguments as an array rather than interpolating them into a single command string. This forces arguments to be passed directly to the executable without shell parsing.
