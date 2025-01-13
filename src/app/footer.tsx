'use client'

import { motion } from "framer-motion"
import { Facebook, Instagram, Youtube } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.88 2.88 0 0 1-2.88-2.88 2.88 2.88 0 0 1 2.88-2.88c.28 0 .55.04.81.12V9.25a6.23 6.23 0 0 0-6.22 6.22A6.23 6.23 0 0 0 11 21.7a6.23 6.23 0 0 0 6.22-6.22V9.79a8.93 8.93 0 0 0 5.37 1.78V8.12a5.17 5.17 0 0 1-3-1.43z"/>
        </svg>
      ),
      href: "#",
      label: "TikTok"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13.5l6 4.5-6 4.5v-9z"/>
        </svg>
      ),
      href: "#",
      label: "Threads"
    },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  ]

  const footerSections = [
    {
      title: "¿Quiénes somos?",
      content: [
        {
          title: "¿Qué es Contigo Voy?",
          description: "Es una marca que ofrece apoyo usando la tecnología para proporcionar un entorno seguro y confiable para el bienestar de los clientes."
        }
      ]
    },
    {
      title: "¡Conéctate ya!",
      links: [
        { text: "Afíliate a Contigo Voy", href: "#" },
        { text: "¡Conoce a nuestro equipo!", href: "#" },
        { text: "¡Conoce a nuestros psicólogos!", href: "#" },
        { text: "Empresa líder en Perú", href: "#" }
      ]
    },
    {
      title: "Servicios",
      links: [
        { text: "Herramientas de colaboración", href: "#" },
        { text: "Gestión de proyectos", href: "#" },
        { text: "Conectividad avanzada", href: "#" }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <footer className="bg-gradient-to-br from-purple-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Social Media Icons */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Atención al usuario */}
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
              src="/logo.gif"
              alt="Contigo Voy Logo"
              width={150}
              height={60}
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

