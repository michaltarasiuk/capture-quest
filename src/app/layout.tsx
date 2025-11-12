import "./globals.css";

import type {Metadata} from "next";

import {Providers} from "@/components/Providers";
import {cn} from "@/lib/cn";
import {geistMono, geistSans} from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Capture Quest - Photo Quest Challenges",
};

export default function Layout({children}: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("text-foreground bg-background min-h-dvh antialiased", [
          geistSans.variable,
          geistMono.variable,
        ])}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
