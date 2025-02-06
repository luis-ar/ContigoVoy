"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormPaciente from "@/components/FormPaciente";
import { ScrollArea } from "@/components/ui/scroll-area";

const PacientesPage = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            Agregar Paciente
            <Plus className="ml-2 h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Agregar Paciente</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[400px] px-4">
            <FormPaciente onClose={handleClose} />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PacientesPage;
