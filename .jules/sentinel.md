## 2024-05-24 - Improper subprocess argument handling
**Vulnerability:** Shell execution enabled via `execSync` allows unexpected shell expansions if variables passed to it contain special characters. Even with `JSON.stringify`, some shell characters might be interpreted.
**Learning:** Always explicitly separate executable arguments and avoid relying on the shell for evaluation unless necessary.
**Prevention:** Use `execFileSync` instead of `execSync` to pass arguments directly to the subprocess without a shell, avoiding risky string interpolation.
## 2026-10-03 - Vitest unmock fetching issues
**Vulnerability:** Vitest mocking of global objects (like `fetch` from `undici`) when tests use an imported unmocking helper (e.g. `getBrowserTestFetch`) can result in mismatching request formats between `globalThis.fetch` and the express app expectations. This was causing a 500 server error instead of the intended 400/401 auth failures because the global fetch wasn't sending the right headers or body structure properly, exposing unstable testing configurations.
**Learning:** For test files that explicitly use unmocking helpers (`getBrowserTestFetch`), never rely on `globalThis.fetch` or standard `fetch()`. It will fail when standard modules are stubbed out by Vitest environments.
**Prevention:** Always use the initialized `realFetch` instance inside the test instead of standard `fetch()` in testing environments that use dynamic unmocking.
