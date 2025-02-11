import { Button, CheckboxGroup, Divider, Spacer } from "@nextui-org/react";
import { Checkbox } from "@/components/ui/checkbox";
import { Command, CommandInput } from "@/components/ui/command";

const pais = [
  { nombre: "México" },
  { nombre: "Colombia" },
  { nombre: "Argentina" },
  { nombre: "Perú" },
  { nombre: "Chile" },
];
const genero = [{ nombre: "Femenino" }, { nombre: "Masculino" }];
const idioma = [{ nombre: "Español" }, { nombre: "Ingles" }];
const Enfoque = [
  { nombre: "Niños" },
  { nombre: "Adolecentes" },
  { nombre: "Familiar" },
  { nombre: "Pareja" },
  { nombre: "Adulto" },
];

export default function ReservarComponentSearch() {
  return (
    <div className="w-[250px] p-4 border-r-1 pb-20 border-[#9494F3]">
      <Divider orientation="vertical" />
      <Command className="rounded-full border-[#9494F3]">
        <CommandInput  
        placeholder="Nombre"/>
      </Command>
      <div className="pt-5"></div>
      <div className="border-t-1 border-[#9494F3]">
        <p className="pt-4 text-xl font-semibold text-[#634AE2]">
          País de tu psicólogo
        </p>
        {pais.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 pt-2 ml-5">
            <Checkbox
              id={`pais-${index}`}
              className="text-xl rounded-2xl bg-white"
            />
            <div className="grid ">
              <label
                htmlFor={`pais-${index}`}
                className="text-sm font-light text-[#634AE2]"
              >
                {item.nombre}
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-1 border-[#9494F3] mt-4">
        <p className="pt-4 text-xl font-semibold text-[#634AE2]">Género</p>
        {genero.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 pt-2 ml-5">
            <Checkbox
              id={`pais-${index}`}
              className="text-xl rounded-2xl bg-white"
            />
            <div className="grid ">
              <label
                htmlFor={`pais-${index}`}
                className="text-sm font-light text-[#634AE2]"
              >
                {item.nombre}
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-1 border-[#9494F3] mt-4">
        <p className="pt-4 text-xl font-semibold text-[#634AE2]">Idioma</p>
        {idioma.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 pt-2 ml-5">
            <Checkbox
              id={`pais-${index}`}
              className="text-xl rounded-2xl bg-white"
            />
            <div className="grid ">
              <label
                htmlFor={`pais-${index}`}
                className="text-sm font-light text-[#634AE2]"
              >
                {item.nombre}
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-1 border-[#9494F3] mt-4">
        <p className="pt-4 text-xl font-semibold text-[#634AE2]">Enfoque</p>
        {Enfoque.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 pt-2 ml-5">
            <Checkbox
              id={`pais-${index}`}
              className="text-xl rounded-2xl bg-white"
            />
            <div className="grid ">
              <label
                htmlFor={`pais-${index}`}
                className="text-sm font-light text-[#634AE2]"
              >
                {item.nombre}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
