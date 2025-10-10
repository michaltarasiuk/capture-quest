import {useCallback, useSyncExternalStore} from "react";

export function useMatchMedia(query: string) {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener("change", onStoreChange);
      return () => {
        mediaQueryList.removeEventListener("change", onStoreChange);
      };
    },
    [query],
  );
  const matches = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
  return matches;
}
