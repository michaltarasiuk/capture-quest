import {useEventListener} from "usehooks-ts";

export function useKeyPress(key: string, fn: () => void) {
  useEventListener("keydown", (e) => {
    if (e.key === key) {
      fn();
    }
  });
}

