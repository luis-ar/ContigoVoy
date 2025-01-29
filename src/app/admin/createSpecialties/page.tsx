import FormSpecialties from "@/components/FormSpecialties";
import React from "react";

const pageCreateSpecialties = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <p className="mt-4 font-bold text-2xl">Create Specialties</p>
      <FormSpecialties />
    </div>
  );
};

export default pageCreateSpecialties;