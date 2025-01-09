"use client";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./Themetoggle";

//INSTALANDO
// npm i @kinde-oss/kinde-auth-nextjs

const Navbar = () => {
  //obtengo los datos del usuario
  return (
    <nav className="border-b bg-background h-[10vh] flex items-center fixed w-full z-10">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            Contigo<span className="text-primary">Voy</span>{" "}
          </h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
