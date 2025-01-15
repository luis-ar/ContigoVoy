import React from "react";
import FormContacto from "./FormContacto";

const EnvioContacto = () => {
  return (
    <div className="flex items-center justify-center w-[80%] max-w-[1000px]">
      <div className="w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
        accusamus qui ullam facere error voluptate in nam distinctio suscipit
        saepe deserunt blanditiis assumenda officia minus facilis. Iste
        aspernatur unde voluptate.
      </div>
      <div className="w-2/3">
        <FormContacto />
      </div>
    </div>
  );
};

export default EnvioContacto;
