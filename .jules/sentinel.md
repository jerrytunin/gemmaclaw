## 2024-07-26 - Command Injection via execSync
**Vulnerability:** Found multiple uses of `execSync(\`gh repo clone ${forkRepo} ...\`)` with unvalidated user input via string interpolation, allowing arbitrary command execution.
**Learning:** `execSync` with backticks in bash will execute injected commands even with `JSON.stringify` or double quotes.
**Prevention:** Strictly use `execFileSync` or `spawnSync` with an array of arguments, or pass explicit shell:false.
