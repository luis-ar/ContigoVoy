'use client'

import { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, Button } from "@nextui-org/react"
import { motion } from "framer-motion"
import { ArrowRight, Brain, Users, Heart, User, ChevronRight } from 'lucide-react'

export default function TherapyServices() {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    {
      icon: Brain,
      title: "Terapia para niños",
      color: "hover:bg-purple-700",
    },
    {
      icon: User,
      title: "Terapia adolescente",
      color: "hover:bg-purple-700",
    },
    {
      icon: Users,
      title: "Terapia de parejas",
      color: "hover:bg-purple-700",
    },
    {
      icon: Heart,
      title: "Terapia para adultos",
      color: "hover:bg-purple-700",
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <motion.h2 
        className="text-4xl font-bold text-center text-purple-600 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Servicios
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-purple-600 rounded-lg p-6 text-white transition-all duration-300 ${service.color}`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <service.icon className="w-16 h-16" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <button
                onClick={() => setIsOpen(true)}
                className="group flex items-center space-x-2 text-sm hover:text-purple-200 transition-colors"
              >
                <span>Ver más</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        size="2xl"
        scrollBehavior="inside"
        backdrop="blur"
      >
        <ModalContent>
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 rounded-lg">
            <ModalHeader>
              <h3 className="text-2xl font-bold">Terapia para niños</h3>
            </ModalHeader>
            <ModalBody>
              <div className="space-y-6">
                <p className="text-lg font-medium">Dirigido a niños de 3 a 12 años.</p>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">Terapia para niños</h4>
                  <p className="text-purple-100">
                    Potencia el bienestar emocional de tu hijo. Empleamos una intervención dinámica, 
                    basada en el juego, para potenciar el bienestar integral del niño. 
                    La terapia contempla el entorno familiar y el ámbito escolar.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    "Resolución de conflictos",
                    "Habilidades sociales",
                    "Traumas por separación de padres",
                    "Inteligencia emocional",
                    "Duelos y miedos",
                    "Autoestima"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <ChevronRight className="w-5 h-5 text-purple-300" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  className="w-full bg-white text-purple-600 hover:bg-purple-100 transition-colors font-semibold py-2 rounded-lg mt-6"
                  onClick={() => setIsOpen(false)}
                >
                  Reservar cita
                </Button>
              </div>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}

