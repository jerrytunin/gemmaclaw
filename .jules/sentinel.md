## 2024-05-24 - Improper subprocess argument handling
**Vulnerability:** Shell command interpolation in execSync allows unsafe execution.
**Learning:** The project relies on execSync with concatenated string inputs (like `execSync(\`gh repo fork \${targetRepo}\`)`) that can lead to improper subprocess argument handling if arguments are controlled.
**Prevention:** Migrate from `execSync` to `execFileSync` enforcing an array-based argument list separating executable paths from inputs to avoid string-based shell evaluation.
