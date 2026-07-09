## 2025-02-14 - Fix command injection in benchmark submit
**Vulnerability:** Shell command injection via `execSync` using string interpolation with unsanitized parameters like branch names, repository paths, or GitHub usernames in `src/commands/submit-benchmark.ts`.
**Learning:** Using `execSync` with template literals allows user-controlled inputs to inject arbitrary commands, as the shell interprets special characters within the string.
**Prevention:** Always use `execFileSync` or `spawnSync` instead of `execSync`, and pass command arguments as an array of strings, which prevents the shell from executing injected commands.
