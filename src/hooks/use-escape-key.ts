import {useKeyPress} from "./use-key-press";

export function useEscapeKey(fn: () => void) {
  useKeyPress("Escape", fn);
}
