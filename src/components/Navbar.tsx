"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
// import { ThemeToggle } from "./Themetoggle"; // Removed unused import
import { cn } from "@/lib/utils";
import { ChevronDown, Menu } from 'lucide-react';

const navItems = [
  { name: "Sobre Nosotros", link: "/" },
  { name: "Servicios", link: "/services" },
  { name: "Contáctanos", link: "/contact" },
  { name:  "Preguntas Frecuentes", link: "/faq"},
  { name: "Blog", link: "/blog" },
];

const ENavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar 
      isBordered 
      isBlurred={false}
      className="bg-background/70 backdrop-blur-md fixed w-full z-50 flex-col justify-center"
      maxWidth="2xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <img src="logo.gif" alt="logo" className="w-40 h-auto" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <DesktopNav navItems={navItems} pathname={pathname} />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          {/* <ThemeToggle /> */} {/* Removed ThemeToggle */}
        </NavbarItem>
        <NavbarItem className="sm:hidden">
          <Dropdown>a
            <DropdownTrigger>
              <Button
                isIconOnly
                variant="light"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Navigation menu">
              {navItems.map((item, index) => (
                <DropdownItem key={index} textValue={item.name}>
                  <Link href={item.link} className="w-full text-[#634AE2]">
                    {item.name}
                  </Link>
                </DropdownItem>
              ))}
              {/* <DropdownItem textValue="Theme toggle">
                <ThemeToggle />
              </DropdownItem> */} {/* Removed ThemeToggle */}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem className="sm:flex">
          <Link href="/login">
            <Button
              variant="bordered"
              className="border-[#634AE2] text-[#634AE2] rounded-full px-6"
            >
              Iniciar Sesion
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

const DesktopNav = ({ navItems, pathname }: { navItems: any[], pathname: string }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className="flex items-center gap-2"
    >
      {navItems.map((navItem, idx) => (
        <NavbarItem key={idx}>
          <Link
            href={navItem.link}
            onMouseEnter={() => setHovered(idx)}
            className={cn(
              "relative px-4 py-2 rounded-full transition-colors",
              pathname === navItem.link ? "text-[#634AE2]" : "text-[#634AE2]"
            )}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 bg-primary/10 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
            <span className="relative z-10 font-medium">
              {navItem.name}
            </span>
          </Link>
        </NavbarItem>
      ))}
    </motion.div>
  );
};

export default ENavbar;
