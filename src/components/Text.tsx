import {cn} from "@/lib/cn";

export function Text({children}: {children: React.ReactNode}) {
  return (
    <p className={cn("text-sm text-gray-600", "dark:text-gray-400")}>
      {children}
    </p>
  );
}
