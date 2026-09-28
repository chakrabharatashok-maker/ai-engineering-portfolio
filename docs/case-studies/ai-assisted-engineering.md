# Case Study: AI-Assisted Engineering Workflow

I use AI coding systems as **implementation collaborators**, not as unquestioned authorities.

## Workflow

### 1. Specify
Define the goal, constraints, preserved behavior, failure states, and forbidden changes.

### 2. Generate
Ask the AI system for a scoped implementation.

### 3. Inspect
Check imports, types, control flow, state transitions, security assumptions, platform assumptions, and scope.

### 4. Test
Compare runtime behavior with acceptance criteria.

### 5. Diagnose
Classify failures across:
```text
syntax → build → runtime → network → auth → data → UI state
```

### 6. Refine
Feed the model concrete evidence such as compiler output, stack traces, file/line references, and expected-vs-actual behavior.

### 7. Accept or reject
Generated code is accepted only when both implementation and explanation survive review.

## Common model failure patterns
- Solving the wrong layer
- Expanding scope unnecessarily
- Adding fallback/mock data that hides real failures
- Mixing browser and mobile environment assumptions
- Hard-coding secrets
- Producing syntactically correct but semantically wrong code

The core question is: **Does the proposed change satisfy the requirement without creating unacceptable new failure modes?**
