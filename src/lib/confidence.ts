export function isConfidenceExcellent(c: number) {
  const [min] = confidenceRanges.excellent;
  return c >= min;
}

export function getConfidenceRange() {
  const [min] = confidenceRanges.poor;
  const [, max] = confidenceRanges.excellent;
  return [min, max] as const;
}

export const confidenceRanges = {
  poor: [0, 0.4],
  partial: [0.5, 0.7],
  excellent: [0.8, 1.0],
} satisfies Record<string, [start: number, end: number]>;
