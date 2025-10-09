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

export default function RootLayout({children}: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
        )}>
        <HeroUIProvider className={cn("container mx-auto")}>
          {children}
          <ToastProvider />
        </HeroUIProvider>
      </body>
    </html>
  );
}
