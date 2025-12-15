import "./globals.css";

import type {Metadata} from "next";

import {Providers} from "#app/components/Providers";
import {cn} from "#app/lib/cn";
import {geistMono, geistSans} from "#app/lib/fonts";

export const metadata: Metadata = {
  title: "Capture Quest - Photo Quest Challenges",
};

export default function Layout({children}: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("scroll-smooth")} suppressHydrationWarning>
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
