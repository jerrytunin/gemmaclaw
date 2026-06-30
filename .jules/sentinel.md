## 2024-05-18 - Replacing execSync with execFileSync/spawnSync
**Vulnerability:** Shell-based command execution using `execSync` is susceptible to command injection due to unsafe interpolation of variables when passed directly as strings, especially since double quotes in Unix shells still evaluate command substitutions.
**Learning:** We need to use `execFileSync` or `spawnSync` exclusively instead of `execSync`, passing an array of arguments, to prevent shell evaluation of user input. `execFileSync` is the preferred 1:1 drop-in replacement because it throws an error on non-zero exit codes.
**Prevention:** Avoid `execSync` with template literals or string concatenation. Use `execFileSync("cmd", ["arg1", "arg2"])`.
