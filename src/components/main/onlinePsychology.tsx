'use client'

import { motion } from "framer-motion";
import Image from "next/image";

export default function OnlinePsychology() {
  const features = [
    {
      icon: <Image src={'/terapiaonline.png'} alt="especialista" width={70} height={60} />,
      title: "Recibe terapia en casa",
      description:
        "Accede a sesiones por videollamada o llamada disfrutando de la comodidad de tu hogar.",
    },
    {
      icon: <Image src={'/listapsicologo.png'} alt="especialista" width={70} height={60} />,
      title: "Elige a tu psicólogo",
      description:
        "Te asignamos un psicólogo colegiado que te guiará en cada sesión, con técnicas efectivas para tus necesidades.",
    },
    {
      icon: <Image src={'/terapiaencasa.png'} alt="especialista" width={70} height={60} />,
      title: "Inicia tu terapia en línea",
      description:
        "Conéctate a tu consulta psicológica a través de contigo voy y empieza tu proceso terapéutico.",
    },
    {
      icon: <Image src={'/agendahorario.png'} alt="especialista" width={70} height={60} />,
      title: "Agenda tu horario ideal",
      description:
        "Programa tus sesiones en el día y la hora que mejor se ajusten a tu rutina.",
    },
  ];

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

  return (
    <div className="w-full max-w-full flex flex-col items-center justify-center px-4 py-16 bg-[#9494f3] relative overflow-hidden">
      <div className="lg:w-2/3">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Qué es la psicología online?
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Es una forma accesible y eficaz de cuidar tu salud mental
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-28 gap-y-20 w-fit"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="flex flex-col items-center justify-center w-40 h-40 rounded-full bg-[#634AE2] backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-lg space-y-4">
                <div className="p-4 bg-[#634AE2] rounded-full group-hover:bg-[#9494F3] transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mt-3">
                <span className="block">
                  {feature.title}
                </span>
              </h3>
              <p className="text-base text-white max-w-[18rem] mt-3">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="hidden lg:block lg:w-[35%] absolute top-1/2 right-[-10%] transform -translate-y-1/2 w-[50%] h-[700px]">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src="/carrusel_psicologiaonline_1.jpg"
            alt="Psicóloga sonriendo"
            layout="fill"
            objectFit="cover"
            className="rounded-full"  
          />
        </div>
      </div>
      {/* <div className="hidden lg:block lg:w-[35%] absolute top-1/2 right-[-10%] transform -translate-y-1/2">
        <Image
          src="/carrusel_psicologiaonline_1.jpg"
          alt="Psicóloga sonriendo"
          width={700}
          height={700}
          className="rounded-full"
        />
      </div> */}
      {/* <div className="hidden lg:block lg:w-[35%] absolute top-1/2 right-[-10%] transform -translate-y-1/2">
        <div className="w-[700px] h-[700px] overflow-hidden rounded-full flex items-center justify-center">
          <Image
            src="/carrusel_psicologiaonline_1.jpg"
            alt="Psicóloga sonriendo"
            width={700}
            height={700}
            className="object-cover"
          />
        </div>
      </div> */}
    </div>
  );
}
