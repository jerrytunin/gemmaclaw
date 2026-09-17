## 2025-05-18 - Migrating to execFileSync for explicit argument arrays
**Vulnerability:** Improper subprocess argument handling
**Learning:** Using execSync with interpolated strings for arguments poses a risk, and escaping is hard. Using execFileSync allows passing arguments in arrays which eliminates the risk of shell evaluation issues.
**Prevention:** Always use execFileSync with explicit argument arrays instead of execSync with string concatenation/interpolation.
