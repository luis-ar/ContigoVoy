"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { Icons } from "@/icons";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  // Función para alternar el tema entre "light" y "dark"
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <label className="relative inline-block w-16 h-8">
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span
          className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition-all duration-400 rounded-full ${
            theme === "dark" ? "bg-[#183153]" : "bg-blue-300"
          }`}
        >
          <span
            className={`absolute h-7 w-7 bg-gray-200 rounded-full transition-all duration-400 ${
              theme === "dark" ? "translate-x-8" : "left-1"
            }`}
          ></span>
        </span>
        <span
          className={`sun absolute top-1.5 z-10 w-6 h-6 transition-all duration-400 ${
            theme === "dark" ? "opacity-0" : "opacity-100 left-9"
          }`}
          dangerouslySetInnerHTML={{ __html: Icons.sun }}
        >
        </span>
        <span
          className={`moon absolute top-1 z-10 w-6 h-6 transition-all duration-400 ${
            theme === "dark" ? "opacity-100 left-1" : "opacity-0"
          }`}
          dangerouslySetInnerHTML={{ __html: Icons.moon }}
        >
        </span>
      </label>
    </div>

  );
}
