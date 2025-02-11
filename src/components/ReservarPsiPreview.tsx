"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"

export default function BlogPreview() {
  return (
    <>
      <Card className="w-[355px] h-[252] bg-background p-5">
        <div >
          <div className="w-2 grid grid-cols-1 md:grid-cols-3">
            <Avatar className="w-20 h-20">
              <AvatarImage src={"https://github.com/shadcn.png"} />
            </Avatar>
            <div className="ml-24 col-span-1 text-[#634AE2]">
              <CardHeader className="space-y-0 pb-2">
              <CardDescription className="text-[#634AE2]">Psicólogo</CardDescription>
                <CardTitle className="text-[#634AE2] text-2xl" >Nombre</CardTitle>
                <CardTitle className="text-[#634AE2] text-2xl" >Apellido</CardTitle>
              </CardHeader>
            </div>
          </div>
        </div>
        <CardContent className="border-t-[0.5px] border-[#9494F3]">
          <p className="text-[#634AE2] pt-3">Epecialidad / Maestría / Doctorado + 00 Años de experiencia</p>
        </CardContent>
        <CardFooter className="flex justify-center space-x-12 pt-3">
        <Button className="rounded-3xl bg-[#E7E7FF] px-6 py-3 text-[#634AE2] font-light">Agendar</Button>
        <Button className="rounded-3xl bg-[#fff] px-6 py-3 border-color[#634AE2] font-light border-1 text-[#634AE2]">Ver Perfil</Button>
        </CardFooter>
      </Card>
    </>
  );
}
