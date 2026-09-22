## 2025-05-18 - Improper subprocess argument handling
**Vulnerability:** Use of `execSync` with command strings containing unescaped interpolations (e.g. `execSync("git branch " + branchName)`) risks command injection.
**Learning:** `execSync` executes via a shell which makes it vulnerable when string interpolation is used. `execFileSync` should be used instead for passing explicit argument arrays, preventing shell evaluation.
**Prevention:** Migrate usages of `execSync` to `execFileSync` and explicitly separate the executable from its argument arrays, discarding manual string wrapping/escaping.
