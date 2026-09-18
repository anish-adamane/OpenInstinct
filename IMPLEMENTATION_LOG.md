# Implementation log

## 2026-09-18 — Rebrand OpenInstinct to Astrazen with email signup

- Cloned Merit Systems OpenInstinct and rebranded product strings, package name, database name, memory namespaces, and the GitHub deploy URL to Astrazen (`anish-adamane/astrazen`).
- Enabled Better Auth email/password so anyone can create an account and use web chat without an iMessage/Linq connector. Phone OTP remains available when Linq is configured or during local phone bypass.
- Allowed `/sign-up` through the auth proxy and added sign-in/sign-up forms plus unit tests.

Tested: `pnpm test:app` (86 files, 724 tests passed) and `pnpm lint:app`.
