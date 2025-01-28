"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PanelProps } from "@/interface";
import React from "react";

export const DataUser = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ estado, setEstado }, ref) => {
    return (
      <div ref={ref}>
        <Avatar
          className="cursor-pointer"
          onClick={() => setEstado(!estado)} // Alterna el estado al hacer clic
        >
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    );
  }
);