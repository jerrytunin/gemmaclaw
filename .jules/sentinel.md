## 2024-05-24 - Improper subprocess argument handling
**Vulnerability:** Use of execSync with string interpolation for external commands, leading to improper subprocess argument handling.
**Learning:** Using execSync allows shell evaluation, which could cause unintended shell expansions.
**Prevention:** Use execFileSync and strictly separate the executable from its arguments.
