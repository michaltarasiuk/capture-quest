"use client";

import {HeroUIProvider, ToastProvider} from "@heroui/react";
import {Provider as JotaiProvider} from "jotai";
import {ThemeProvider} from "next-themes";

import {cn} from "@/lib/cn";

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <HeroUIProvider className={cn("container mx-auto px-3 py-6")}>
      <ThemeProvider attribute="class">
        <JotaiProvider>{children}</JotaiProvider>
        <ToastProvider />
      </ThemeProvider>
    </HeroUIProvider>
  );
}
