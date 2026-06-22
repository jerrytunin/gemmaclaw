## 2024-05-20 - Fix Command Injection in Benchmark Upload
**Vulnerability:** The benchmark upload script constructed a bash command (`gh pr create`) using unescaped string interpolation from the JSON payload. This could allow command injection if a malicious user provided a crafted model name or hardware architecture.
**Learning:** `execSync` executes in a shell when a string is passed, making it vulnerable to injection. Input data (even seemingly safe fields like model name) should never be directly interpolated into shell commands.
**Prevention:** Use array arguments for `execFileSync` or `spawnSync` when passing arguments to external commands rather than string interpolation for shell commands.
