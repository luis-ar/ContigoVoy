"use client";
import CardServices from "@/components/CardServices";
import CardServicesAnimation from "@/components/CardServicesAnimation";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";

export default function Home() {
  const services = [
    {
      title: "Servicio 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id, accusantium eligendi tempora rerum nulla officia deleniti reprehenderit quaerat blanditiis dolorem odit hic cupiditate delectus quae obcaecati libero sint culpa.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4ohyCfSw224R31RSyR_ijVNCCX0ytw8xog&s",
      color: "bg-customCard-50",
    },
    {
      title: "Servicio 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id, accusantium eligendi tempora rerum nulla officia deleniti reprehenderit quaerat blanditiis dolorem odit hic cupiditate delectus quae obcaecati libero sint culpa.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4ohyCfSw224R31RSyR_ijVNCCX0ytw8xog&s",
      color: "bg-customCard-100",
    },
    {
      title: "Servicio 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id, accusantium eligendi tempora rerum nulla officia deleniti reprehenderit quaerat blanditiis dolorem odit hic cupiditate delectus quae obcaecati libero sint culpa.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4ohyCfSw224R31RSyR_ijVNCCX0ytw8xog&s",
      color: "bg-customCard-200",
    },
  ];
  return (
    <div className="">
      <div className="flex gap-4 p-6 bg-primary flex-col md:flex-row">
        <div className="flex-1 lg:w-2/3 flex-col space-y-5 flex">
          <h1 className="text-l font-extrabold mt-8 text-white">
            TERAPIAS ONLINE
          </h1>
          <h1 className="text-6xl font-bold text-purple-700">
            Estamos contigo <span className="text-sky-500"> y para ti</span>
          </h1>
          <p className="text-xl text-white">
            Con nuestras terapias virtuales, transformamos tu vida y te
            acompañamos en cada paso de tu camino hacia la sanción
          </p>
          <div className="flex flex-wrap items-center justify-center">
            <Button className="text-gl text-white bg-purple-700 ">
              Más información
            </Button>
          </div>
        </div>
        <div className="flex-1 items-center justify-center flex">
          <Slider />
        </div>
      </div>
      <div className="pt-6 pb-16">
        <p className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-minsk-800 dark:text-primary ">
          Nuestros Servicios
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center mt-8 ">
          {services.map((service, index) => (
            <CardServicesAnimation
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
