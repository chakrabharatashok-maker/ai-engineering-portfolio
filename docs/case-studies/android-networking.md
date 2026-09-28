# Case Study: Android Networking Failure

## Problem
A mobile application could render its shell, but authenticated features depending on network access failed on Android.

## Hypothesis tree
```text
Feature unavailable
├── UI rendering?
├── Navigation state?
├── Authentication state?
├── API construction?
├── Backend authorization?
└── Network transport?
    ├── host reachable?
    ├── protocol permitted?
    └── Android security policy?
```

## Key observation
Modern Android targets can restrict cleartext HTTP traffic. So code may be valid while requests still fail at the platform transport layer.

## Root-cause reasoning
The critical clue is **platform asymmetry**: if web succeeds, Android fails, and backend behavior is unchanged, platform-specific networking becomes a high-priority hypothesis.

## Resolution pattern
Use the narrowest environment-appropriate fix. Development configuration may permit local cleartext traffic; production should normally use HTTPS.

## What this demonstrates
1. Avoid changing unrelated working code.
2. Identify the layer that differs.
3. Form falsifiable hypotheses.
4. Prefer the narrowest valid fix.
5. Preserve production security expectations.

## AI evaluation angle
A weak AI answer may rewrite fetch or authentication logic without checking Android transport policy. A stronger answer explains the platform-specific failure mode first.
