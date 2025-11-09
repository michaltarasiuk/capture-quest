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
    <html lang="en">
      <body
        className={cn("min-h-dvh bg-gray-50 text-gray-900 antialiased", [
          geistSans.variable,
          geistMono.variable,
        ])}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
