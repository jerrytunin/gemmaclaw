## 2024-10-02 - Command Injection in benchmark submit scripts

**Vulnerability:** Use of \`execSync\` with unsanitized arguments or without explicitly splitting arguments in \`src/commands/submit-benchmark.ts\`, \`src/gemmaclaw/benchmark-kit/upload.ts\`, \`src/commands/benchmark-gemma.ts\`, and \`src/commands/setup-gemma.ts\`. Specifically string interpolation inside the command string for \`execSync\`.
**Learning:** Shell-based \`execSync\` usage with string interpolation has a high risk of command injection, especially when variables like branch names or PR bodies are derived from user input or file names. Node.js treats the whole string passed to \`execSync\` as a shell command.
**Prevention:** Use \`execFileSync\` or \`spawnSync\` with arguments strictly separated into an array, rather than passing a single string with variables interpolated.
