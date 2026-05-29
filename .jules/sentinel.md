## 2026-05-25 - [Fix command injection in submit-benchmark.ts]
**Vulnerability:** A maliciously crafted results.json could execute arbitrary shell commands via the `model` property which is used to construct the runId and file paths when executed with `execSync`.
**Learning:** `execSync` is dangerous when used with string interpolation on untrusted input. It allows command injection.
**Prevention:** Always prefer `execFileSync` or `spawnSync` with an array of arguments to execute shell commands. This prevents the shell from interpreting shell metacharacters in the input.
