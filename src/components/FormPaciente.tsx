"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabaseClient";
import { pacientFormSchema, signUpFormSchema } from "@/lib/auth-schema";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import { validateStorage } from "@/utils/validationStorage";
const FormPaciente = ({ onClose }: any) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [state, setState] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [especialidad, setEspecialidad] = useState<any[]>([]);

  const form = useForm({
    resolver: zodResolver(pacientFormSchema),
    defaultValues: {
      name: "",
      lastnamePaternal: "",
      lastnameMaternal: "",
      email: "",
      phone: "",
      fechaNacimiento: "",
      genero: "",
      antecedentes: "",
      direccion: "",
      dni: "",
    },
  });

  const handleSignUp = async (values: z.infer<typeof pacientFormSchema>) => {
    setState(true);
    const {
      name,
      email,
      lastnameMaternal,
      lastnamePaternal,
      dni,
      phone,
      fechaNacimiento,
      genero,
      antecedentes,
      direccion,
    } = values;
    onClose();
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSignUp)}
        className="w-64 space-y-8 sm:w-full pt-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastnamePaternal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido Paterno</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el apellido paterno" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastnameMaternal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido Materno</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el apellido materno" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fechaNacimiento"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha Nacimiento</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese la fecha de nacimiento"
                  {...field}
                  type="date"
                  max={new Date().toISOString().split("T")[0]}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genero"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genero</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                  }}
                  value={field.value}
                >
                  <SelectTrigger className="">
                    <SelectValue placeholder="Seleccione el genero" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Genero</SelectLabel>
                      <SelectItem value="masculino">Masculino</SelectItem>
                      <SelectItem value="femenino">Femenino</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese el telefono"
                  {...field}
                  maxLength={9}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="direccion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Direccion</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese la direccion" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="antecedentes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Antecedentes</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese los antecedentes" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dni"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dni</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el dni" {...field} maxLength={8} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={state} className="w-full">
          Create User
        </Button>
      </form>
    </Form>
  );
};

export default FormPaciente;
