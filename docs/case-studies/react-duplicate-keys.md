# Case Study: React Duplicate Keys

## Problem
A React UI rendered metadata chips like this:

```tsx
{[question.subject, question.chapter, question.topic].map((item) => (
  <span key={item}>{item}</span>
))}
```

The implementation assumes every display label is unique. If two labels match, React receives duplicate sibling keys.

## Why this matters
Keys preserve component identity across renders. Duplicate keys can cause incorrect reconciliation.

## Safer pattern
```tsx
const metadata = [
  { kind: "subject", value: question.subject },
  { kind: "chapter", value: question.chapter },
  { kind: "topic", value: question.topic },
];

{metadata
  .filter(({ value }) => Boolean(value))
  .map(({ kind, value }) => (
    <span key={`${kind}:${value}`}>{value}</span>
  ))}
```

## Evaluation lesson
Using an array index may silence the warning but still provide unstable identity if the collection changes.

**General principle:** display text is not necessarily an identifier.
