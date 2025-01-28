"use client";
import FormSignUp from "@/components/FormSignUp";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center py-5">
      <div className="flex items-center justify-center flex-col bg-minsk-200 dark:bg-black w-64 sm:w-[420px] p-4 rounded-2xl border">
        <p className="font-bold text-2xl">Create User</p>
        <FormSignUp />
      </div>
    </div>
  );
};

export default page;