"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { Mail, Lock, LogIn } from 'lucide-react';
import { signInFormSchema } from "@/lib/auth-schema";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Checkbox,
  Divider,
} from "@nextui-org/react";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md p-5">
          <CardHeader className="flex flex-col items-center pb-0 pt-6 px-4 gap-2">
            <LogIn size={40} className="text-primary" />
            <h2 className="text-2xl font-bold text-foreground">¡Bienvenido de nuevo!</h2>
            <p className="text-sm text-default-500">Por favor, inicia sesión en tu cuenta</p>
          </CardHeader>
          <CardBody className="overflow-hidden">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
              <Input
                type="email"
                label="Correo electrónico"
                placeholder="Ingresa tu correo"
                labelPlacement="outside"
                startContent={<Mail className="text-default-400" size={16} />}
                {...form.register("email")}
                errorMessage={form.formState.errors.email?.message}
              />
              <Input
                type="password"
                label="Contraseña"
                placeholder="Ingresa tu contraseña"
                labelPlacement="outside"
                startContent={<Lock className="text-default-400" size={16} />}
                {...form.register("password")}
                errorMessage={form.formState.errors.password?.message}
              />
              <div className="flex items-center justify-between">
                <Checkbox defaultSelected size="sm">Recuérdame</Checkbox>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Button type="submit" color="primary" className="w-full">
                Iniciar sesión
              </Button>
            </form>
          </CardBody>
          <Divider />
          <CardFooter className="flex flex-col items-center py-4 px-6">
            <p className="text-sm text-default-500">
              ¿No tienes una cuenta?{" "}
              <Link href="/register" className="text-primary hover:underline">
                Regístrate
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginPage;
