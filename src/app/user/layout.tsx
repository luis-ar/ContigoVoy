import NavbarUser from "@/components/NavbarUser";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/authContext";
import type { ReactNode } from "react";

export default function HomeLayout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <NavbarUser />
      <div className="min-h-[90vh] mt-[10vh]">{children}</div>
    </ThemeProvider>
  );
}
