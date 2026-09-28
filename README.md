# AI Engineering Portfolio — Bharat Chakra

Technical portfolio demonstrating hands-on work in **AI-assisted software engineering, debugging, TypeScript/JavaScript, React/React Native concepts, Supabase/PostgreSQL patterns, automation, and LLM output evaluation**.

> **Important:** This repository contains original, sanitized demonstrations and technical case studies. It does **not** contain source code, credentials, database schemas, or proprietary business logic from acePYQs or any employer.

## What this portfolio demonstrates

- Translating product requirements into testable engineering specifications
- Reviewing and debugging AI-generated code instead of accepting it blindly
- TypeScript/JavaScript implementation and failure analysis
- React identity/key correctness and defensive UI logic
- Mobile/web debugging and platform-specific reasoning
- Supabase/PostgreSQL integration patterns
- Structured evaluation of AI-generated technical answers
- Production-safety thinking: isolation, backward compatibility, validation, and regression prevention
- Clear technical writing and root-cause explanations

## Background

I built and operate **[acePYQs](https://acepyqs.in)**, a commercial exam-preparation product, using a modern web/mobile stack and AI-assisted engineering workflows. Its production repository is intentionally private.

My hands-on stack includes:

`TypeScript` · `JavaScript` · `React` · `Next.js` · `React Native` · `Expo` · `Supabase` · `PostgreSQL` · `Git/GitHub` · `Vercel` · `n8n`

This public repository focuses on the engineering reasoning behind that work rather than reproducing commercial source code.

## Repository map

```text
.
├── docs/
│   ├── architecture.md
│   └── case-studies/
│       ├── ai-assisted-engineering.md
│       ├── android-networking.md
│       └── react-duplicate-keys.md
├── evaluation/
│   ├── rubric.md
│   └── sample-code-review.md
├── src/
│   └── examples/
│       ├── safe-react-key.ts
│       ├── validate-ai-output.ts
│       └── supabase-query-pattern.ts
├── package.json
└── tsconfig.json
```

## Selected engineering case studies

### 1. Android networking failure
A mobile feature appeared correct at the application layer but failed on Android because platform network-security policy blocked cleartext traffic. The case study shows how I separate **application, authentication, transport, and platform-configuration hypotheses** before changing code.

See: [Android networking case study](docs/case-studies/android-networking.md)

### 2. React duplicate-key failure
A UI mapped subject/chapter/topic values directly into React keys. Repeated metadata produced non-unique keys, risking incorrect reconciliation. The fix required understanding why a visually harmless warning can represent a state-identity bug.

See: [React duplicate keys](docs/case-studies/react-duplicate-keys.md)

### 3. AI-assisted engineering workflow
My workflow treats AI-generated code as a proposal that must be checked for correctness, architecture fit, regressions, unsafe assumptions, and incomplete edge-case handling.

See: [AI-assisted engineering](docs/case-studies/ai-assisted-engineering.md)

## AI evaluation approach

For technical AI-evaluation work, I use a repeatable rubric:

1. **Instruction adherence**
2. **Correctness**
3. **Completeness**
4. **Safety**
5. **Architecture fit**
6. **Explainability**

See: [Evaluation rubric](evaluation/rubric.md)

## Commercial project boundary

**acePYQs is a commercial product.** Its production source remains private.

This repository intentionally excludes production source files, Supabase identifiers/credentials, API keys, production schemas, proprietary algorithms, internal analytics data, and private user information.

## Target work

AI Coding Evaluator · AI Trainer — Coding · LLM / Agent Evaluation · Technical Quality Analyst · AI-Assisted Software Development · JavaScript / TypeScript evaluation work

## Contact

**Bharat Chakra**  
GitHub: [@chakrabharatashok-maker](https://github.com/chakrabharatashok-maker)  
Product: [acepyqs.in](https://acepyqs.in)

---

**Use AI aggressively, but verify everything that matters.**
