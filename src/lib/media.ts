export function isMobile() {
  return matchMedia("(max-width: 64rem)").matches;
}

export function getMobileMedia() {
  return matchMedia("(max-width: 64rem)");
}
