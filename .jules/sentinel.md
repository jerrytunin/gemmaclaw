## 2025-05-31 - [CRITICAL] Prevent Command Injection via Shell Interpolation
**Vulnerability:** Shell interpolation in `execSync` allowed arbitrary command execution by exploiting the `GOOGLE_APPLICATION_CREDENTIALS` environment variable in `vertex-setup.ts`.
**Learning:** Never pass unsanitized input directly into shell commands via string interpolation, especially variables originating from the environment (e.g., `process.env`).
**Prevention:** Use `execFileSync` instead of `execSync`, parse the arguments natively in Node.js instead of executing shell scripts inline, and pass variables securely as arguments.
