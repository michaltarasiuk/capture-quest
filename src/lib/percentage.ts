export function percentage(v: number, d: number) {
  let n = "0";
  if (Number.isFinite(v) && Number.isFinite(d) && d !== 0) {
    n = ((v / d) * 100).toFixed();
  }
  return n + "%";
}
