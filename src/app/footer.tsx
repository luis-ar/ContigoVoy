"use client";

import RedesSociales from "@/components/RedesSociales";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerSections = [
    {
      title: "¿Quiénes somos?",
      content: [
        {
          title: "¿Qué es Contigo Voy?",
          description:
            "Es una marca que ofrece apoyo usando la tecnología para proporcionar un entorno seguro y confiable para el bienestar de los clientes.",
        },
      ],
    },
    {
      title: "¡Conéctate ya!",
      links: [
        { text: "Afíliate a Contigo Voy", href: "#" },
        { text: "¡Conoce a nuestro equipo!", href: "#" },
        { text: "¡Conoce a nuestros psicólogos!", href: "#" },
        { text: "Empresa líder en Perú", href: "#" },
      ],
    },
    {
      title: "Servicios",
      links: [
        { text: "Herramientas de colaboración", href: "#" },
        { text: "Gestión de proyectos", href: "#" },
        { text: "Conectividad avanzada", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#9986d9] to-[#8b3dd4] text-white">
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <RedesSociales />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold">Atención al usuario</h2>
          <div className="w-24 h-1 bg-white/30 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx }}
              className="relative"
            >
              <h3 className="text-xl font-semibold mb-6">{section.title}</h3>
              {section.content ? (
                section.content.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-purple-100 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))
              ) : (
                <ul className="space-y-3">
                  {section.links?.map((link) => (
                    <li key={link.text}>
                      <Link
                        href={link.href}
                        className="text-purple-100 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 bg-purple-300 rounded-full mr-2 group-hover:w-2.5 transition-all duration-300" />
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute right-0 bottom-0 md:block hidden"
          >
            <Image
              src="/logo.png"
              alt="Contigo Voy Logo"
              width={150}
              height={60}
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
