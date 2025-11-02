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
        className={cn(
          "min-h-screen bg-gradient-to-br from-blue-50 to-purple-50",
          `${geistSans.variable} ${geistMono.variable} text-gray-900 antialiased`,
        )}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
