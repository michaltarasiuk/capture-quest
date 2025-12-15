import {useEventListener} from "usehooks-ts";

export function useEscapeKey(fn: () => void) {
  useEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      fn();
    }
  });
}
