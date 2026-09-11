
## 2024-11-04 - Eliminate Shell Interpolation Risk
**Vulnerability:** Command injection vulnerability due to interpolating variables (like repository paths and branch names) into strings passed to `execSync`.
**Learning:** The project relies on dynamically constructed CLI commands. When using `execSync`, the Node.js runtime passes the full string to the shell which evaluates spaces and special characters, risking injection and requiring manual escaping (like `JSON.stringify` for titles).
**Prevention:** Always use `execFileSync` instead of `execSync`, separating the executable and its arguments strictly into an array to bypass the shell entirely. Remove any manual shell escaping when migrating, as arguments are passed literally.
