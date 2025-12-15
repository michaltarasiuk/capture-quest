import {useIsClient} from "#app/hooks/use-is-client";

export function ClientGate({
  fallback,
  children,
}: {
  fallback: React.ReactNode;
  children: () => React.ReactNode;
}) {
  const isClient = useIsClient();
  return isClient ? children() : fallback;
}
