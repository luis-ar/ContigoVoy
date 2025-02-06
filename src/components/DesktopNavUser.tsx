"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./Themetoggle";
import { DataUser } from "./DataUser";
import { Panel } from "./PanelUser";
import { MobileNavbar } from "./MobileNavbar";

export const NavbarGeneral = ({ navItems }: any) => {
  const [estado, setEstado] = useState<boolean>(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      panelRef.current &&
      !panelRef.current.contains(event.target as Node) &&
      userRef.current &&
      !userRef.current.contains(event.target as Node)
    ) {
      setEstado(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="bg-background h-[10vh] flex items-start fixed w-full z-10 top-0">
        <div className="w-full p-6 flex items-left justify-between">
          <Link href="/">
            <h1 className="font-bold text-3xl">
              Contigo<span className="text-primary">Voy</span>{" "}
            </h1>
          </Link>
          <div className="flex flex-col items-start gap-y-5">
            <DesktopNavUser navItems={navItems} />
            <div className="flex items-center gap-5">
              <DataUser ref={userRef} estado={estado} setEstado={setEstado} />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      <Panel ref={panelRef} estado={estado} setEstado={setEstado} />
    </div>
  );
};

export const DesktopNavUser = ({ navItems }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <>
      <div className="lg:hidden">
        <MobileNavbar navItems={navItems} />
      </div>
      <motion.div
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "relative z-[60] mx-auto hidden w-full flex-col items-center self-start rounded-full py-2 lg:flex",
          "inset-x-0 h-auto"
        )}
      >
        <div className="flex flex-col items-start gap-4 ">
          {navItems.map((navItem: any, idx: number) => (
            <div
              key={idx}
              className="w-full flex justify-start items-center gap-4"
            >
              {" "}
              <Link
                onMouseEnter={() => setHovered(idx)}
                className={`w-full relative flex items-center px-3 py-2 text-muted-foreground ${
                  pathname === navItem.link || hovered === idx
                    ? "bg-[#534489] rounded-full"
                    : ""
                }`}
                href={navItem.link}
              >
                <span
                  className={cn(
                    "relative z-20 text-sm",
                    hovered === idx || pathname === navItem.link
                      ? "text-white"
                      : "text-[#7b8fbd] dark:text-primary"
                  )}
                  dangerouslySetInnerHTML={{
                    __html: navItem.icono.replace(
                      /<svg /,
                      '<svg fill="currentColor" '
                    ),
                  }}
                  style={{
                    width: "1.2em",
                    height: "1.2em",
                    marginRight: "0.5em",
                  }}
                />
                <span
                  className={cn(
                    "relative z-20 text-sm",
                    hovered === idx || pathname === navItem.link
                      ? "text-white"
                      : "text-[#7b8fbd] dark:text-primary"
                  )}
                >
                  {navItem.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};
