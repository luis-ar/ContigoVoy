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
import { signUpFormSchema } from "@/lib/auth-schema";
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
import { useRef, useState } from "react";
import { validateStorage } from "@/utils/validationStorage";
const FormSignUp = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [state, setState] = useState(false);
  const form = useForm({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      role: "",
      photo:"",
    },
  });

  const handleSignUp = async (values: z.infer<typeof signUpFormSchema>) => {
    const { name, email, password, role ,lastname, photo} = values;
    const { data: dataemail, error: emailError } = await supabase.rpc(
      "check_email_exists",
      {
        email_input: email,
      }
    );
    if (dataemail === true) {
      toast.info("El email ya existe");
      return;
    }
    await validateStorage();
    const ruta = role === "admin" ? "/admin/home" : "/user/home";
    const namePhoto = `avatar_${Date.now()}.png`;
    const urlPhoto = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${namePhoto}`;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          role,
          lastname,
          photo:urlPhoto,
        },
        emailRedirectTo: `${window.location.origin}${ruta}`, // Redirigir a /home después de la confirmación
      },
    });

    if (error) {
      console.log(`Error: ${error.message}`);
      toast.error(`Error: ${error.message}`);
    } else {
      await supabase.storage.from("avatars").upload(namePhoto, photo);
      toast.success("Usuario registrado con éxito. Que verifique su correo.");
      form.reset();
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Insert your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lastname</FormLabel>
              <FormControl>
                <Input placeholder="Insert your lastname" {...field} />
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
                <Input placeholder="Insert your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Insert your password"
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rol</FormLabel>
              <FormControl>
                {/* <Input placeholder="Insert your role" {...field} /> */}
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Roles</SelectLabel>
                      <SelectItem value="admin">Administrador</SelectItem>
                      <SelectItem value="psicologo">Psicologo</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
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
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Photo</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/jpeg, image/png"
                  ref={fileInputRef}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    field.onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={state}>
          Create User
        </Button>
      </form>
    </Form>
  );
};

export default FormSignUp;