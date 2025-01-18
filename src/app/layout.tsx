"use client";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/Navbar";
import Footer from "./footer";
import { AuthProvider } from "@/context/authContext";
import { usePathname } from "next/navigation";
import { Lexend } from "next/font/google";
import { ToastContainer } from "react-toastify";

export const lexend = Lexend({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const getBaseRoute = () => {
    const pathParts = pathname.split("/");
    return `/${pathParts[1]}`;
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
            {getBaseRoute() !== "/user" && <Navbar />}
            <div className="min-h-[90vh] mt-[10vh]">{children}</div>
            {getBaseRoute() !== "/user" && <Footer />}
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
