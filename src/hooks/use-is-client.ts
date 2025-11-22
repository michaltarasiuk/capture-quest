import {useSyncExternalStore} from "react";

export function useIsClient() {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  return isClient;
}

function subscribe() {
  return function () {};
}
