"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ThemeToggle } from "./Themetoggle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    name: "Home",
    link: "/admin/home",
  },
  {
    name: "CREATE",
    link: "/admin/create",
  },
];

const NavbarAdmin = () => {
  return (
    <nav className="border-b bg-background h-[10vh] flex items-center fixed w-full z-10 top-0">
      <div className="w-full p-6 flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            Contigo<span className="text-primary">Voy</span>{" "}
          </h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <DesktopNav navItems={navItems} />
          <DataUser />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
const DataUser = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (data?.user) {
        const name = data.user.user_metadata?.name || "Usuario";
        setUserName(name);
      }

      if (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();
  }, []);
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("Error al cerrar sesión:", error.message);
    } else {
      console.log("Sesión cerrada con éxito");
      router.push("/"); // Redirigir al inicio
    }
  };
  return (
    <div>
      <div className="">Hello admin {userName}</div>
      <Button onClick={handleSignOut}>Cerrar sesión</Button>
    </div>
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
        <div className="hidden flex-1 flex-row items-center justify-center space-x-0 text-sm text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex gap-1">
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

export default NavbarAdmin;