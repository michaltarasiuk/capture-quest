export function percentage(v: number, base: number) {
  return (v / base) * 100;
}

export function formatPercentage(percentage: number) {
  return Math.floor(percentage) + "%";
}
