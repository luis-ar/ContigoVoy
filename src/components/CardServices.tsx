"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardServicesProps } from "@/interface";

const CardServices: React.FC<CardServicesProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardDescription>
          <img src={imageUrl} alt="Imagen de servicio" />
        </CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Más Información</Button>
      </CardFooter>
    </Card>
  );
};

export default CardServices;
