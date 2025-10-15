import {useEventListener} from "usehooks-ts";

export function useEscapeDown(fn: () => void) {
  useEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      fn();
    }
  });
}
