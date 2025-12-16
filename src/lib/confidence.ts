export function isConfidenceExcellent(c: number) {
  const [min] = CONFIDENCE_RANGES.excellent;
  return c >= min;
}

export function getConfidenceRange() {
  const [min] = CONFIDENCE_RANGES.poor;
  const [, max] = CONFIDENCE_RANGES.excellent;
  return [min, max] as const;
}

export const CONFIDENCE_RANGES = {
  poor: [0, 0.4],
  partial: [0.5, 0.7],
  excellent: [0.8, 1.0],
} satisfies Record<string, [start: number, end: number]>;
