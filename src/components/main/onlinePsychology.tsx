import { motion } from "framer-motion";
import { Card } from "@nextui-org/react";
import { Users } from "lucide-react";

export default function OnlinePsychology() {
  const features = [
    {
      icon: Users,
      title: "Recibe terapia en casa",
      description:
        "Accede a sesiones por videollamada o llamada disfrutando de la comodidad de tu hogar.",
    },
    {
      icon: Users,
      title: "Elige a tu psicólogo",
      description:
        "Te asignamos un psicólogo colegiado que te guiará en cada sesión, con técnicas efectivas para tus necesidades.",
    },
    {
      icon: Users,
      title: "Inicia tu terapia en línea",
      description:
        "Conéctate a tu consulta psicológica a través de contigo voy y empieza tu proceso terapéutico.",
    },
    {
      icon: Users,
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
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-purple-700 mb-6">
          ¿Qué es la psicología online?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Es una forma accesible y eficaz de cuidar tu salud mental
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="group"
          >
            <Card className="p-6 bg-white backdrop-blur-sm hover:bg-purple-700 hover:text-white transition-all duration-300 cursor-pointer border-none shadow-lg">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-purple-200 rounded-full group-hover:bg-purple-500 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-white">
                  {feature.title}
                </h3>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="w-16 h-1 bg-purple-600 group-hover:bg-white rounded-full transition-colors duration-300"
                />
                <p className="text-sm text-gray-600 group-hover:text-white">
                  {feature.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
