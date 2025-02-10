import { Divider } from "@nextui-org/react";
import BlogAside from "./blogaside";

import { ScrollShadow } from "@nextui-org/react";
import BlogPreview from "./blogpreview";

export default function ReservarComponents() {
  return (
    <div className="flex justify-center text-[#634AE2]">
      <div className="w-full max-w-7xl px-4">
        <h1 className="text-start pt-10 text-3xl font-bold ml-20">
          La mejor inversión es en ti mismo ¡Comienza tu proceso hoy!
        </h1>
        <h5 className="text-start text-xl leading-10 ml-20 ">
          Agenda tu sesión con un psicólogo en línea, fácil, seguro y privado
        </h5>
        <div className="flex justify-center ml-20 pt-5">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="col-span-1">
              <Divider orientation="vertical">
                <BlogAside />
              </Divider>
            </div>

            <div className="col-span-2">
              <ScrollShadow hideScrollBar className=" h-[870px]">
                <BlogPreview />
                <BlogPreview />
                <BlogPreview />
                <BlogPreview />
                <BlogPreview />
                <BlogPreview />
                <BlogPreview />
              </ScrollShadow>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
