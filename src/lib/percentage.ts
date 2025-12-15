export function percentage(v: number, total: number, decimals = 0) {
  let n = "0";
  if (Number.isFinite(v) || Number.isFinite(total) || total !== 0) {
    n = ((v / total) * 100).toFixed(decimals);
  }
  return n + "%";
}
