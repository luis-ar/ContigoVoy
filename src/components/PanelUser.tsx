"use client";
import { supabase } from "@/lib/supabaseClient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PanelProps } from "@/interface";
export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ estado, setEstado }, ref) => {
    const [user, setUser] = useState<{
      name: string | null;
      email: string | null;
      lastname: string | null;
    }>({ name: null, email: null, lastname: null });
    const router = useRouter();
    const [visible, setVisible] = useState<boolean>(estado);
    const [inciales, setIncials] = useState<string>("");

    useEffect(() => {
      if (estado) {
        setVisible(true);
      } else {
        const timer = setTimeout(() => setVisible(false), 300);
        return () => clearTimeout(timer);
      }
    }, [estado]);
    useEffect(() => {
      const fetchUser = async () => {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
          console.error("Error fetching user:", error.message);
          return; // Salir si hay un error
        }

        const { user } = data || {};
        const name = user?.user_metadata?.name || "Usuario";
        const email = user?.user_metadata?.email || "usuario@gmail.com";
        const lastname = user?.user_metadata?.lastname || "";

        setUser({ name, email, lastname });
        setIncials(
          name.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase()
        );
      };

      fetchUser();
    }, []);

    const handleSignOut = async () => {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.log("Error al cerrar sesión:", error.message);
      } else {
        console.log("Sesión cerrada con éxito");
        setEstado && setEstado(false);
        router.push("/"); // Redirigir al inicio
      }
    };

    return (
      <div
        className={`fixed w-64 bg-primary right-0 font-semibold transform transition-transform duration-300 ${
          estado ? "translate-x-0" : "translate-x-full"
        }`}
        ref={ref}
      >
        {visible && (
          <div
            className={`w-full transition-opacity duration-300 ${
              estado ? "opacity-100" : "opacity-0"
            }`}
          >
           <div className="flex w-full items-center justify-between text-center h-10 text-sm border-b ">
              <div className="flex flex-1 justify-center px-4">Contigo Voy</div>
              <div
                className="justify-center flex px-4 hover:bg-[#7777b8] h-full cursor-pointer items-center"
                onClick={handleSignOut}
              >
                Cerrar Sesión
              </div>
            </div>
            <div className="flex w-full h-28 pr-3">
              <div className="flex justify-center items-center px-3">
                <Avatar className="cursor-pointer w-20 h-20">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>{inciales}</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-1 justify-center flex-col">
                <div className="text-xl font-extrabold truncate w-[9rem]">
                  User - {user.name} {user.lastname}
                </div>
                <div className="text-sm truncate w-[9rem]">{user.email}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);