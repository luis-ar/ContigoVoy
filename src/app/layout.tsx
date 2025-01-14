"use client";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/Navbar";
import Footer from "./footer";
import { ToastContainer } from "react-toastify";

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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="min-h-[90vh] mt-[10vh]">{children}</div>
          <Footer /> 
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
