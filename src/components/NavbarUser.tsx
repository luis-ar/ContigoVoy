"use client";
import React, { useEffect, useRef, useState } from "react";
import { Panel } from "./PanelUser";
import { DataUser } from "./DataUser";
import { ThemeToggle } from "./Themetoggle";
import Link from "next/link";
import Image from "next/image";
import {DesktopNavUser} from "./DesktopNavUser";
import { Icons } from "@/icons";

const navItems = [
  {
    name: "Dashboard",
    link: "/user/home",
    icono: Icons.dashboard,
  },
  {
    name: "Pacientes",
    link: "/user/pacientes",
    icono: Icons.pacientes,
  },
  {
    name: "Citas",
    link: "/user/citas",
    icono: Icons.citas,
  },
  {
    name: "Historial",
    link: "/user/historial",
    icono: Icons.historial,
  },
  {
    name: "Calendario",
    link: "/user/calendario",
    icono: Icons.calendario,
  },
  {
    name: "Blog",
    link: "/user/blog",
    icono: Icons.blog,
  },
  {
    name: "Politicas y Privacidad",
    link: "/user/politicasPriva",
    icono: Icons.politicasyPriv,
  },
  
];

const NavbarUser = () => {
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
    <div className="flex flex-row">
      <div className="w-60 h-screen fixed p-4">
        <div className="bg-background w-full h-full rounded-2xl">
        <Link href="/">
          <h1 className="items-center font-normal text-3xl">
            <Image
              src={"/LOGO.png"}
              alt="logo"
              width={150}
              height={100}
              layout="intrinsic"
            />
          </h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <DesktopNavUser navItems={navItems} />
        </div>
        </div>
      </div>
      <div className="flex-1 ml-60 fixed mt-4">
        <div>
          <nav className="bg-red-300 px-4 h-[8vh] flex items-center fixed z-10 top-4 w-[calc(100vw-240px)]">
            <div className="flex items-center justify-between w-full">
              <div>hola mundo</div>
              <div className="flex items-center gap-x-5">
                <DataUser ref={userRef} estado={estado} setEstado={setEstado} />
                <ThemeToggle />
              </div>
            </div>
          </nav>
          <div className="mt-[8vh]">
            <Panel ref={panelRef} estado={estado} setEstado={setEstado} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;