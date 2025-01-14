'use client'

import { motion } from "framer-motion"
import { Card } from "@nextui-org/react"
import { Quote } from 'lucide-react'
import { useState, useEffect } from "react"

const testimonials = [
  {
    text: "Excelente lugar, precios muy cómodos y profesionales muy atentos, me encantó todo el servicio que me brindaron por fin llegué a un lugar donde me orientaron y ayudaron.",
    author: "Roberto Albujar",
    role: "Paciente"
  },
  {
    text: "Un ambiente acogedor y profesional. El equipo demuestra verdadera vocación por ayudar a sus pacientes.",
    author: "María González",
    role: "Paciente"
  },
  {
    text: "La atención personalizada y el seguimiento constante han marcado una diferencia significativa en mi proceso.",
    author: "Carlos Mendoza",
    role: "Paciente"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full py-20 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-px bg-purple-200 mb-8 mx-auto max-w-[200px]"
          />
          <h2 className="text-4xl font-bold text-purple-600 mb-4">Testimonios</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-purple-200 mt-8 mx-auto max-w-[200px]"
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-purple-200">
            <Quote size={80} />
          </div>
          
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-none p-8 md:p-12">
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-600 italic mb-8 leading-relaxed">
                  {testimonials[currentIndex].text}
                </p>
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="w-12 h-1 bg-purple-600 rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold text-purple-600">
                    {testimonials[currentIndex].author}
                  </h3>
                  <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-purple-600 w-6" : "bg-purple-200"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

