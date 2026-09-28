# AI Coding Evaluation Rubric

## 1. Instruction adherence
Did the response solve the exact task and respect constraints?

## 2. Technical correctness
Check syntax, types, API semantics, platform compatibility, state logic, and data assumptions.

## 3. Root-cause quality
Prefer explanations that identify why the failure occurs rather than merely suggesting a change.

## 4. Completeness
Check loading, error, null, retry, cleanup, and edge-case behavior where relevant.

## 5. Security
Reject implementations that expose secrets, weaken production security without justification, bypass authorization, or log sensitive data.

## 6. Regression risk
Ask what existing behavior changes, whether the feature is isolated, and whether backward compatibility is preserved.

## 7. Explainability
Strong technical answers make assumptions visible.

## Verdict template
```text
Verdict: PASS / NEEDS REVISION / FAIL

Primary reason:
...

Correct elements:
- ...

Problems:
- ...

Required changes:
- ...

Risk:
Low / Medium / High
```
