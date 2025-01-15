"use client";

import Slider from "@/components/Slider";
import ChooseUs from "@/components/main/chooseUs";
import TherapyServices from "@/components/main/therapyServices";
import OnlinePsychology from "@/components/main/onlinePsychology";
import Testimonials from "@/components/main/testimonials";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/AnimatedText";
import About from "@/components/About";


export default function Home() {
  
  return (
    <div className="">
      <About/>

      {/*<div className="flex gap-4 p-6 bg-primary flex-col md:flex-row">
        <div className="flex-1 lg:w-2/3 flex-col space-y-5 flex">
          <h1 className="text-l font-extrabold mt-8 text-white">
            TERAPIAS ONLINE
          </h1>
          <AnimatedText />
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
      <div className="pt-4">
        <p className="text-center text-2xl md:text-3xl xl:text-4xl font-bold text-minsk-800 dark:text-primary ">
          Nuestros Servicios
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center mt-8 ">
          {services.map((service, index) => (
            <CardServices
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              color={service.color}
            />
          ))}
        </div>
      </div>  */}
      <TherapyServices />
      <ChooseUs />
      <OnlinePsychology />
      <Testimonials />
      
    </div>
  );
}
