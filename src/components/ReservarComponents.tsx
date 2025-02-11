import { Divider } from "@nextui-org/react";
import ReservarComponentSearch from "./ReservarComponentSearch";
import ReservarPsiPreview from "./ReservarPsiPreview";

export default function ReservarComponents() {
  return (
    <div className="flex justify-center text-[#634AE2]">
      <div className="w-full max-w-7xl">
        <h1 className="text-start pt-10 text-3xl font-bold ml-20">
          La mejor inversión es en ti mismo ¡Comienza tu proceso hoy!
        </h1>
        <h5 className="text-start text-xl leading-10 ml-20 ">
          Agenda tu sesión con un psicólogo en línea, fácil, seguro y privado
        </h5>
        <div className="flex justify-start pt-5">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="col-span-1 flex justify-start ml-20 w-3/4">
              <Divider orientation="vertical" className="h-full">
                <ReservarComponentSearch />
              </Divider>
            </div>
            <div className="grid grid-cols-2 pt-3 justify-start ml-auto w-1/4">
              <ReservarPsiPreview />
              <ReservarPsiPreview />
              <ReservarPsiPreview />
              <ReservarPsiPreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
