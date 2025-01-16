"use client";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/Navbar";
import Footer from "./footer";
import { AuthProvider } from "@/context/authContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Navbar />
            <div className="min-h-[90vh]">{children}</div>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
