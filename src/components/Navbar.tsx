"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ThemeToggle } from "./Themetoggle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Showcase",
    link: "/showcase",
  },
  {
    name: "Docs",
    link: "/docs",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
];

const Navbar = () => {
  return (
    <nav className="border-b bg-background h-[10vh] flex items-center fixed w-full z-10">
      <div className="w-full p-6 flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            Contigo<span className="text-primary">Voy</span>{" "}
          </h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <DesktopNav navItems={navItems} />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
const DesktopNav = ({ navItems }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const pathname = usePathname();
  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex",
        "inset-x-0 h-16"
      )}
    >
      <div className="flex items-center gap-6">
        <div className="hidden flex-1 flex-row items-center justify-center space-x-0 text-sm text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              onMouseEnter={() => setHovered(idx)}
              className={`relative px-4 py-2 text-muted-foreground ${
                pathname === navItem.link && "bg-minsk-600 rounded-full"
              }`}
              key={idx}
              href={navItem.link}
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 h-full w-full rounded-full bg-minsk-600"
                />
              )}
              <span
                className={cn(
                  "relative z-20 font-bold text-white text-base",
                  hovered === idx || pathname === navItem.link
                    ? "text-white"
                    : "text-minsk-700 dark:text-primary"
                )}
              >
                {navItem.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
