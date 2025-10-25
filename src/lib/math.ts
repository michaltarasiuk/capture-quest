export function percentage(v: number, base: number) {
  return Math.floor((v / base) * 100) + "%";
}
