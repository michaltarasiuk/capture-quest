"use client";

import {useSyncExternalStore} from "react";

interface ClientGateProps {
  fallback: React.ReactNode;
  children: () => React.ReactNode;
}

export function ClientGate({fallback, children}: ClientGateProps) {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  return isClient ? children() : fallback;
}

function subscribe() {
  return function () {};
}
