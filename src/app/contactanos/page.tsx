import EnvioContacto from "@/components/EnvioContacto";
import React from "react";

const pageContactanos = () => {
  return (
    <div>
      <div className="header" id="inicio">
        <div className="contenedor1 head">
          <h1 className="titulo text-base sm:text-5xl uppercase mb-8">
            Convertimos tus sueños en realidad ContigoVoy
          </h1>
          <p className="copy font-medium text-base md:text-2xl">
            "El dinero no es el objetivo final, sino una herramienta para lograr
            tus metas. Administra sabiamente tus gastos y convierte tus metas en
            realidad"
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-20">
        <EnvioContacto />
      </div>
    </div>
  );
};

export default pageContactanos;
