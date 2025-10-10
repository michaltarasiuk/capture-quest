"use client";

import "./globals.css";

import {Geist, Geist_Mono} from "next/font/google";
import {HeroUIProvider, ToastProvider} from "@heroui/react";
import {cn} from "@/lib/cn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({children}: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gradient-to-br from-blue-50 to-purple-50",
          `${geistSans.variable} ${geistMono.variable} text-gray-900 antialiased`,
        )}>
        <HeroUIProvider className={cn("container mx-auto px-3 py-6")}>
          {children}
          <ToastProvider />
        </HeroUIProvider>
      </body>
    </html>
  );
}
