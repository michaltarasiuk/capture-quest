import "./globals.css";

import {Metadata} from "next";

import {Providers} from "@/components/Providers";
import {cn} from "@/lib/cn";
import {geistMono, geistSans} from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Capture Photo - Photo Quest Challenges",
  description:
    "Complete fun photo challenges and quests around your city. " +
    "Find street art, red cars, local markets, and more. " +
    "Earn points by capturing unique moments.",
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
