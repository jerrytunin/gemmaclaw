## 2023-10-27 - Fix Command Injection in vertex-setup.ts

**Vulnerability:** Command injection due to shell substitution within `execSync` involving user-provided `saKeyPath`.
**Learning:** Avoid `execSync` with complex shell commands and dynamic string interpolation.
**Prevention:** Use `fs.readFileSync` and `JSON.parse` to extract specific config fields, then pass the values natively to the executable via `execFileSync` arguments array to prevent shell expansions.

## 2026-10-04 - Fix fetch stubbing in tests

**Vulnerability:** Not a direct security vulnerability, but relying on mocked/stubbed environments for fetch in browser tests can obscure true behaviors and lead to silent logic errors.
**Learning:** Browser extension tests using `undici` stubbing for global `fetch` cause mismatched request formats and 500 errors instead of proper 4xx responses.
**Prevention:** Explicitly use the unmocked fetch instance by importing `getBrowserTestFetch` from test helpers when testing browser control server interactions to ensure accurate server behavior simulation.
