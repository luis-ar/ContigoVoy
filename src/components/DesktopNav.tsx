"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MobileNavbar } from "./MobileNavbar";


export const DesktopNav = ({ navItems }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <>
      {/* Ocultar en pantallas pequeñas */}
      <div className="lg:hidden">
        <MobileNavbar navItems={navItems} />
      </div>

      <motion.div
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex",
          "inset-x-0 h-16"
        )}
      >
        <div className="flex items-center gap-6">
          <div className="hidden flex-1 flex-row items-center justify-center space-x-0 text-sm text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex gap-1">
            {navItems.map((navItem: any, idx: number) => (
              <div key={idx}>
                {navItem.name === "Servicios" ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      asChild
                      onMouseEnter={() => setHovered(idx)}
                    >
                      <button
                        className={`relative px-4 py-2 rounded-full ${
                          hovered === idx || pathname === navItem.link
                            ? "bg-[#634AE2] text-white"
                            : "text-[#634AE2] hover:bg-[#634AE2] hover:text-white"
                        }`}
                      >
                        {navItem.name}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56"
                      onMouseEnter={() => setHovered(idx)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <DropdownMenuItem>
                        <Link href="/terapia-adultos">Terapia para Adultos</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/terapia-adolescentes">
                          Terapia para Adolescentes
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/terapia-ninos">Terapia para Niños</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : navItem.isButton ? (
                  <Link href={navItem.link}>
                    <button
                      className={`text-sm sm:text-base border-2 transition-colors duration-300 rounded-full py-1 sm:py-2 px-3 sm:px-4 ${
                        pathname === navItem.link
                          ? "bg-[#634AE2] text-white"
                          : "text-[#634AE2] border-[#634AE2] hover:bg-[#634AE2] hover:text-white"
                      }`}
                      onMouseEnter={() => setHovered(null)}
                    >
                      {navItem.name}
                    </button>
                  </Link>
                ) : (
                  <Link
                    onMouseEnter={() => setHovered(idx)}
                    className={`relative px-4 py-2 text-muted-foreground ${
                      pathname === navItem.link || hovered === idx
                        ? "bg-[#634AE2] rounded-full"
                        : ""
                    }`}
                    href={navItem.link}
                  >
                    {hovered === idx && (
                      <motion.div
                        layoutId="hovered"
                        className="absolute inset-0 h-full w-full rounded-full bg-[#634AE2]"
                      />
                    )}
                    <span
                      className={cn(
                        "relative z-20 text-white text-base",
                        hovered === idx || pathname === navItem.link
                          ? "text-white"
                          : "text-[#634AE2] dark:text-primary"
                      )}
                    >
                      {navItem.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};
