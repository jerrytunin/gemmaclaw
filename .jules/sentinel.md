
## 2024-06-02 - Prevent Command Injection with execSync Interpolation
**Vulnerability:** Shell command injection risk in GitHub CLI operations due to `execSync` used with interpolated variables (`prTitle`, `prBody`) inside an `execSync` string payload.
**Learning:** Even though `JSON.stringify` or `.replace(/"/g, '\\"')` was used in some spots, constructing strings with interpolated attacker-controlled values and passing them to `execSync` executes the command via `sh` by default, leading to injection vulnerability.
**Prevention:** Instead of string interpolation with `execSync`, `execFileSync` should be used where arguments are passed as an explicit array (e.g. `execFileSync("gh", ["pr", "create", ...])`) avoiding the shell interpolation.
