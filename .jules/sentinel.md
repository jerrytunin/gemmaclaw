## 2024-08-05 - Fix Command Injection in Benchmark Upload
**Vulnerability:** Use of execSync with unescaped user-provided strings allowed for command injection vulnerabilities via string interpolation.
**Learning:** External shell tools like gh and git should be executed with separated argument arrays to avoid interpretation by the shell, instead of concatenating strings.
**Prevention:** Use execFileSync instead of execSync for external command execution.
