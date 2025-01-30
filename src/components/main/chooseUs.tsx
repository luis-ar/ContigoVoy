'use client'

import { motion } from "framer-motion"
import Image from "next/image";

export default function ChooseUs() {
  const features = [
    {
      icon: <Image src={'/ChooseUsImages/especialistas.webp'} alt="especialista" width={70} height={60} />,
      title: "Especialistas colegiados",
    },
    {
      icon: <Image src='/ChooseUsImages/atencionvirtual.webp' alt="Atención virtual" width={70} height={60} />,
      title: "Atención virtual",
    },
    {
      icon: <Image src='/ChooseUsImages/etica.webp' alt="Ética y confiabilidad" width={70} height={60} />,
      title: "Ética y confiabilidad",
    },
    {
      icon: <Image src='/horarios.png' alt="Horarios flexibles" width={70} height={60} />,
      title: "Horarios flexibles",
    },
    {
      icon: <Image src='/ChooseUsImages/costos.webp' alt="Costos accesibles" width={70} height={60} />,
      title: "Costos accesibles",
    },
    {
      icon: <Image src='/ChooseUsImages/confidencialidad.webp' alt="Confidencialidad" width={70} height={60} />,
      title: "Confidencialidad",
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
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-[#634AE2] mb-6">¿Por qué elegirnos?</h2>
        <p className="text-lg text-[#634AE2] max-w-3xl mx-auto leading-relaxed ">
          En Contigo Voy, te ofrecemos todo esto y mucho más, brindándote el apoyo necesario para afrontar tus desafíos diarios con mayor fortaleza y equilibrio emocional.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 justify-items-center"
      >
        {/* Primer fila con los primeros 4 elementos */}
        {features.slice(0, 4).map((feature, index) => (
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
            <h3 className="text-center text-lg font-semibold text-[#634AE2] max-w-[9rem] mt-3">
                {feature.title}
              </h3>
          </motion.div>
        ))}

        <div className="lg:col-span-4 flex justify-center gap-20">
          {features.slice(4).map((feature, index) => (
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
              <h3 className="text-center text-lg font-semibold text-[#634AE2] max-w-[8rem] mt-3 ">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
