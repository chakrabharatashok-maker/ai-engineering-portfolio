# Sanitized Architecture Notes

This document describes a **generic architecture pattern** representative of the kinds of systems I work with. It intentionally omits production identifiers, table names, credentials, internal routes, and proprietary logic.

## High-level architecture

```text
Web Client (Next.js + React)
        │
        │ HTTPS
        ▼
Backend / Data Layer
Supabase + PostgreSQL
Auth + relational data
        │
   ┌────┴────┐
   ▼         ▼
Mobile      Automation
React       n8n/webhooks
Native/Expo
```

## Engineering principles

### Protect the production path
A working production system should not be modified merely because a new client is being added. Mobile development should be isolated where possible and shared-backend changes should remain backward-compatible.

### Treat authentication as a distributed flow
Authentication failures can occur at credential exchange, token persistence, token refresh, client hydration, navigation guards, API authorization, or platform networking.

### Distinguish transport failures from application failures
Before rewriting application logic, verify host reachability, protocol policy, environment configuration, platform restrictions, token availability, and server responses.

### Separate identifiers from labels
Human-readable labels are not always unique. UI identity, database keys, and cache keys should use stable identifiers or deterministic composite keys.

### Bound AI-generated changes
Define allowed files, preserved behavior, input/output, failure handling, acceptance tests, and rollback expectations before accepting generated code.
