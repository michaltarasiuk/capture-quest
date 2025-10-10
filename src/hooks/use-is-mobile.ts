import {useMatchMedia} from "./use-match-media";

export function useIsMobile() {
  return useMatchMedia("(max-width: 64rem)");
}
