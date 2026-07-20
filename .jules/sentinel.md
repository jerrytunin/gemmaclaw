## YYYY-MM-DD - Command Injection Risk in Benchmark Upload
**Vulnerability:** Command injection vulnerability in `src/gemmaclaw/benchmark-kit/upload.ts` via `execSync`.
**Learning:** Using string interpolation with `execSync` and unsanitized or insufficiently sanitized inputs (like PR titles and bodies generated from user-provided or dynamic benchmark data) can lead to command injection.
**Prevention:** Always strictly use `execFileSync` or `spawnSync` with a properly separated array of arguments, instead of `execSync` with string concatenation.
