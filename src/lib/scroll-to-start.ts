export function scrollToStart(e: Element) {
  e.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}
