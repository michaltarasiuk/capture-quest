export function getMobileMedia() {
  return matchMedia("(max-width: 64rem)");
}

export function isMobile() {
  return getMobileMedia().matches;
}
