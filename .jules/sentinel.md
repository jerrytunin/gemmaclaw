## YYYY-MM-DD - Command Injection Risk via execSync

**Vulnerability:** Command injection vulnerability in `src/commands/submit-benchmark.ts` and `src/gemmaclaw/benchmark-kit/upload.ts` due to the use of `execSync` with unsanitized arguments. Specifically `branchName` and `targetRepo` might be manipulated by user input, leading to command execution.
**Learning:** `execSync` is highly susceptible to command injection if inputs are not properly sanitized or if the input is constructed via string interpolation.
**Prevention:** Use `execFileSync` instead of `execSync` to pass arguments directly to the executable without invoking a shell. This mitigates command injection by separating the executable from its arguments.
