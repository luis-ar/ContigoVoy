"use client";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./Themetoggle";
import Image from "next/image";
import { DesktopNav } from "./DesktopNav";

const navItems = [
  {
    name: "Sobre Nosotros",
    link: "/",
  },
  {
    name: "Servicios",
    link: "/showcase",
  },
  {
    name: "Contáctanos",
    link: "/contactanos",
  },
  {
    name: "Preguntas Frecuentes",
    link: "/PreguntasFrecuentes",
  },
  {
    name: "Blog",
    link: "/Blog",
  },
  {
    name: "Iniciar Sesión",
    link: "/login",
    isButton: true,
  }
];


const Navbar = () => {
  return (
    <nav className="border-b bg-background h-[10vh] flex items-center fixed w-full z-10 top-0">
     <div className="w-full p-6 flex items-center justify-between">
        <Link href="/">
          <h1 className="font-normal text-3xl">
            <Image src={"/LOGO.png"} alt="logo" width={160} height={100} layout="intrinsic" />
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
export default Navbar;
