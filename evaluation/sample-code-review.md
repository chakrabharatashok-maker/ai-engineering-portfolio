# Sample AI Code Review

## AI-generated proposal
```tsx
categories.map((category, index) => (
  <CategoryCard key={index} category={category} />
))
```

## Review
**Verdict: NEEDS REVISION**

The code is valid JSX, but the index is being used as identity. If the list is reordered, filtered, inserted into, or deleted from, React may associate component state with the wrong logical item.

## Better implementation
```tsx
categories.map((category) => (
  <CategoryCard key={category.id} category={category} />
))
```

If no ID exists, use a stable domain-derived composite key.

The important distinction is between **code that runs** and **code whose assumptions are valid**.
