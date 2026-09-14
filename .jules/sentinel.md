## 2024-05-24 - Subprocess arguments handling

**Vulnerability:** Improper handling of subprocess arguments in execSync.
**Learning:** Using execSync with strings can lead to unexpected shell parsing when variables contain special characters.
**Prevention:** Always use execFileSync with explicit argument arrays.
