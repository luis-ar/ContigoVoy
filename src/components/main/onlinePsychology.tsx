"use client";

import { pagination } from "@nextui-org/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import { Rewind } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const features = [
  {
    icon: (
      <Image
        src={"/OnlinePsychologyImages/terapiaonline.webp"}
        alt="especialista"
        width={70}
        height={60}
      />
    ),
    title: "Recibe terapia en casa",
    description:
      "Accede a sesiones por videollamada o llamada disfrutando de la comodidad de tu hogar.",
    background: "/CarruselInferiorMain/abuela.webp",
  },
  {
    icon: (
      <Image
        src={"/OnlinePsychologyImages/listapsicologo.webp"}
        alt="especialista"
        width={70}
        height={60}
      />
    ),
    title: "Elige a tu psicólogo",
    description:
      "Te asignamos un psicólogo colegiado que te guiará en cada sesión, con técnicas efectivas para tus necesidades.",
   
    background: "/CarruselInferiorMain/azul.webp",
  },
  {
    icon: (
      <Image
        src={"/OnlinePsychologyImages/terapiaencasa.webp"}
        alt="especialista"
        width={70}
        height={60}
      />
    ),
    title: "Inicia tu terapia en línea",
    description:
      "Conéctate a tu consulta psicológica a través de contigo voy y empieza tu proceso terapéutico.",
    background: "/CarruselInferiorMain/brazos.webp",
  },
  {
    icon: (
      <Image
        src={"/OnlinePsychologyImages/agendahorario.webp"}
        alt="especialista"
        width={70}
        height={60}
      />
    ),
    title: "Agenda tu horario ideal",
    description:
      "Programa tus sesiones en el día y la hora que mejor se ajusten a tu rutina.",
    background: "/CarruselInferiorMain/cruzado.webp",
  },
];
//hola
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};


export default function OnlinePsychology() {
  const [currentPhrase, setCurrentPhrase] = useState<number>(0);
  const handleSlideChange = (splide: any) => {
    setCurrentPhrase(splide.index);
  };

  return (
    <div className="w-full max-w-full flex flex-col items-center justify-center px-4 py-16 bg-[#9494f3] relative overflow-hidden">
      <div className="relative w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Qué es la psicología online?
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Es una forma accesible y eficaz de cuidar tu salud mental
          </p>
        </motion.div>

        <div className="flex flex-col items-center xl:flex-row">
          <div className="w-full md:w-1/2 pl-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20 w-fit max-w-2xl mx-auto md:mx-0"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group flex flex-col items-center md:items-start text-center md:text-left w-fit"
                >
                  <div className="flex flex-col items-center justify-center w-40 h-40 rounded-full bg-[#634AE2] backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-lg space-y-4">
                    <div className="p-4 bg-[#634AE2] rounded-full group-hover:bg-[#9494F3] transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mt-3">
                    <span className="block">{feature.title}</span>
                  </h3>
                  <p className="text-base text-white max-w-[16rem] mt-3 mx-auto md:mx-0">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 ">
            <div className="w-[750px] h-[750px] rounded-full overflow-hidden "> 
              <Splide
                options={{
                  autoplay: true,
                  interval: 3000,
                  pauseOnHover: false,
                  rewind: true,
                  loop:true,
                }}
                onMove={handleSlideChange}
              >
                {features.map((feature, index) => (
                  <SplideSlide
                    key={`online-psychology-${index}`}
                    id={`slide-online-psychology-${index}`}
                  >
                    <div
                      className="w-[750px] h-[750px] "
                      style={{
                        backgroundImage: `url(${features[currentPhrase].background})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />   

                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
