export function percentage(v: number, total: number, decimals = 0) {
  if (!Number.isFinite(v) || !Number.isFinite(total) || total === 0) {
    return "0%";
  }
  return ((v / total) * 100).toFixed(decimals) + "%";
}
