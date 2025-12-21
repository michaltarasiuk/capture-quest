import {createContext, useContext} from "react";

export function createSafeContext<T>(displayName: string) {
  const Context = createContext<T | null>(null);
  Context.displayName = displayName;
  function useSafeContext(): T {
    const value = useContext(Context);
    if (value === null) {
      throw new Error(
        `use${displayName} must be used within a ${displayName}Provider`,
      );
    }
    return value;
  }
  return [Context, useSafeContext] as const;
}
