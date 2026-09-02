## 2024-05-24 - Fix Command Injection Vulnerabilities in execSync usage

**Vulnerability:** Several occurrences of `execSync` used unescaped, shell-evaluated string concatenation which leaves it vulnerable to command injection vulnerabilities (especially when running git and gh). `execSync` automatically uses `/bin/sh` or `/bin/bash` which interprets spaces and shell operators.

**Learning:** Shell-evaluation when using `child_process.execSync` can lead to critical command injection attacks if arguments contain unsanitized input. When possible, always use `execFileSync` passing an array of arguments, because it circumvents the shell evaluation while maintaining similar synchronous execution features. Avoid string concatenation.

**Prevention:** Use `child_process.execFileSync` instead of `execSync` and pass CLI options and values inside an array as arguments. E.g., `execFileSync('git', ['push', 'origin', branchName])` instead of `execSync(\`git push origin \${branchName}\`)`.
