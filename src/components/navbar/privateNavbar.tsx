"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  NavbarBrand,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { User } from 'lucide-react';
import Image from "next/image";
import { useAuth } from "@/context/authContext";

const navItems = [
  { name: "Dashboard", link: "/dashboard" },
  { name: "Perfil", link: "/profile" },
];

const PrivateNavbar: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { user, logout } = useAuth();

  return (
    <>
      <div className="flex items-center">
        <NavbarBrand>
            <Link href="/">
                <Image
                src="/LOGO.png"
                alt="logo"
                width={100}
                height={25}
                className="w-32 h-auto sm:w-48 sm:h-auto"
                />
            </Link>
        </NavbarBrand>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center gap-4">
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
                  "relative px-3 sm:px-4 py-1 sm:py-2 rounded-full transition-colors hover:bg-[#634AE2] hover:text-white text-[#634AE2] text-sm sm:text-base",
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
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center gap-2 sm:gap-4">
        <NavbarItem className="sm:hidden">
          <Dropdown>
            <DropdownTrigger>
              <Avatar
                icon={<User size={24} />}
                classNames={{
                  base: "bg-[#634AE2] text-white cursor-pointer",
                  icon: "text-white",
                }}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User menu">
              <>
                {navItems.map((item, index) => (
                  <DropdownItem key={index} >
                    <Link href={item.link} className="w-full text-[#634AE2] text-sm sm:text-base">
                      {item.name}
                    </Link>
                  </DropdownItem>
                ))}
                <DropdownItem key={"Cerrar sesión"}>
                  <Link href="/" onClick={logout} className="w-full text-[#634AE2] text-sm sm:text-base">
                    Cerrar sesión
                  </Link>
                </DropdownItem>
              </>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex">
          <Dropdown>
            <DropdownTrigger>
              <Avatar
                icon={<User size={24} />}
                classNames={{
                  base: "bg-[#634AE2] text-white cursor-pointer",
                  icon: "text-white",
                }}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User menu">
              <DropdownItem key={`Bienvenido, ${user?.email}`}>
                <span className="font-medium text-black">Bienvenido, {user?.email}</span>
              </DropdownItem>
              <DropdownItem key={"Cerrar sesión"} >
                <Link href="/" onClick={logout} className="w-full text-[#634AE2] text-sm sm:text-base">
                  Cerrar sesión
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </div>
    </>
  );
};

export default PrivateNavbar;
