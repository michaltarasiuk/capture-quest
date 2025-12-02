export function percentage(v: number, total: number, decimals = 0) {
  const percent =
    !Number.isFinite(v) || !Number.isFinite(total) || total === 0
      ? 0
      : Number(((v / total) * 100).toFixed(decimals));
  return formatPercentage(percent);
}

function formatPercentage(v: number) {
  return v + "%";
}
