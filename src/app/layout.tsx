import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import { ThemeProvider } from "./components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutHeader />
        {children}
        <LayoutFooter />
      </body>
    </html>
  );
}
