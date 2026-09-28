export type ReviewSeverity = "low" | "medium" | "high";

export interface ReviewFinding {
  rule: string;
  severity: ReviewSeverity;
  message: string;
}

const SECRET_PATTERNS = [
  /service[_-]?role/i,
  /api[_-]?key\s*[:=]\s*["'][^"']+["']/i,
  /password\s*[:=]\s*["'][^"']+["']/i,
];

const RISKY_PATTERNS = [
  {
    rule: "silent-error",
    pattern: /catch\s*\([^)]*\)\s*{\s*}/,
    message: "Empty catch block can hide operational failures.",
  },
  {
    rule: "index-key",
    pattern: /key\s*=\s*{\s*(?:index|i)\s*}/,
    message: "Array index used as UI identity; verify list stability.",
  },
];

export function reviewGeneratedCode(source: string): ReviewFinding[] {
  const findings: ReviewFinding[] = [];

  if (SECRET_PATTERNS.some((pattern) => pattern.test(source))) {
    findings.push({
      rule: "possible-secret",
      severity: "high",
      message: "Possible hard-coded credential or privileged token detected.",
    });
  }

  for (const rule of RISKY_PATTERNS) {
    if (rule.pattern.test(source)) {
      findings.push({
        rule: rule.rule,
        severity: "medium",
        message: rule.message,
      });
    }
  }

  return findings;
}
