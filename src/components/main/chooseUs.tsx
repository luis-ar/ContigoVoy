'use client'

import { motion } from "framer-motion"
import { Card } from "@nextui-org/react"
import { Clock, Users, Shield, Video, Coins, LockKeyhole } from 'lucide-react'

export default function ChooseUs() {
  const features = [
    {
      icon: Users,
      title: "Especialistas colegiados",
      color: "group-hover:text-purple-300",
    },
    {
      icon: Video,
      title: "Atención virtual",
      color: "group-hover:text-purple-300",
    },
    {
      icon: Shield,
      title: "Ética y confiabilidad",
      color: "group-hover:text-purple-300",
    },
    {
      icon: Clock,
      title: "Horarios flexibles",
      color: "group-hover:text-purple-300",
    },
    {
      icon: Coins,
      title: "Costos accesibles",
      color: "group-hover:text-purple-300",
    },
    {
      icon: LockKeyhole,
      title: "Confidencialidad",
      color: "group-hover:text-purple-300",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-purple-600 mb-6">¿Por qué elegirnos?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          En Contigo Voy, te ofrecemos todo esto y mucho más, brindándote el apoyo necesario para afrontar tus desafíos diarios con mayor fortaleza y equilibrio emocional.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="group"
          >
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer border-none shadow-lg">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-purple-100 rounded-full group-hover:bg-purple-500 transition-colors duration-300">
                  <feature.icon className={`w-8 h-8 text-purple-600 ${feature.color} transition-colors duration-300`} />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="w-16 h-1 bg-purple-600 group-hover:bg-white rounded-full transition-colors duration-300"
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

