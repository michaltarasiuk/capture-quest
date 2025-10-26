export const percentage = (v: number, base: number, decimals = 0) =>
  !Number.isFinite(v) || !Number.isFinite(base) || base === 0
    ? "0%"
    : `${+((v / base) * 100).toFixed(decimals)}%`;
