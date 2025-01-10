"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { Mail, Lock } from 'lucide-react';

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
import { Checkbox } from "@/components/ui/checkbox";
import { signInFormSchema } from "@/lib/auth-schema";

const LoginPage = () => {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signInFormSchema>) => {
    const { email, password } = values;
    console.log(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            ¡Bienvenido de nuevo!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Por favor, inicia sesión en tu cuenta
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
          <FormItem>
            <FormLabel className="sr-only">Correo electrónico</FormLabel>
            <FormControl>
              <div className="relative">
                <Input
            {...field}
            placeholder="Correo electrónico"
            className="pl-10 py-2"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
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
            <FormLabel className="sr-only">Contraseña</FormLabel>
            <FormControl>
              <div className="relative">
                <Input
            {...field}
            type="password"
            placeholder="Contraseña"
            className="pl-10 py-2"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
          <Checkbox id="remember-me" />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Recuérdame
          </label>
              </div>
              <div className="text-sm">
          <Link href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
            ¿Olvidaste tu contraseña?
          </Link>
              </div>
            </div>
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
              Iniciar sesión
            </Button>
          </form>
        </Form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            ¿No tienes una cuenta?{" "}
            <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

