"use client";

import {useIsClient} from "#app/hooks/use-is-client";

interface ClientGateProps {
  fallback: React.ReactNode;
  children: () => React.ReactNode;
}

export function ClientGate({fallback, children}: ClientGateProps) {
  const isClient = useIsClient();
  return isClient ? children() : fallback;
}
