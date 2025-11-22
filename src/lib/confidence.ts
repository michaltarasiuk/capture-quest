export function isConfidenceExcellent(c: number) {
  const [min] = ConfidenceRanges.excellent;
  return c >= min;
}

export function getConfidenceRange() {
  const [min] = ConfidenceRanges.poor;
  const [, max] = ConfidenceRanges.excellent;
  return [min, max] as const;
}

export const ConfidenceRanges = {
  poor: [0, 0.4],
  partial: [0.5, 0.7],
  excellent: [0.8, 1.0],
} satisfies Record<string, [start: number, end: number]>;
