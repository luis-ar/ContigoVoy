'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Lock, ArrowRight, CheckCircle2, EyeIcon, EyeOffIcon } from 'lucide-react'
import { Input, Button, Card } from '@nextui-org/react'
import { useAuth } from '@/hooks/useAuth'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { login, error } = useAuth()
  const router = useRouter()

  const toggleVisibility = () => setIsVisible(!isVisible)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setIsSuccess(false)
    
    try {
      await login(email, password)
      setIsSuccess(true)
      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
    } catch {
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-purple-300">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[420px] px-4 relative"
      >
        {/* Purple background card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -20, y: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          className="absolute -left-8 -bottom-8 right-8 top-8 bg-purple-600/30 rounded-2xl backdrop-blur-sm"
        />

        <Card className="w-full p-8 shadow-xl bg-white/90 backdrop-blur-sm rounded-2xl relative z-10">
          <motion.div
            initial={false}
            animate={isSuccess ? { scale: 0.95, opacity: 0 } : { scale: 1, opacity: 1 }}
          >
            <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#6b4ce6] to-[#9747FF] bg-clip-text text-transparent">
              Acceder
            </h1>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Usuario
                </label>
                <Input
                  type="email"
                  placeholder="Ingrese su email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  startContent={<User className="text-[#6b4ce6]" size={20} />}
                  classNames={{
                    base: "max-w-full",
                    mainWrapper: "h-12",
                    input: "text-base",
                    inputWrapper: [
                      "h-12",
                      "bg-white",
                      "hover:bg-white/60",
                      "group-data-[focused=true]:bg-white",
                      "!cursor-text",
                      "shadow-sm",
                    ],
                  }}
                  isDisabled={isLoading || isSuccess}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Contraseña
                </label>
                <Input
                  type={isVisible ? "text" : "password"}
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  startContent={<Lock className="text-[#6b4ce6]" size={20} />}
                  endContent={
                    <button type="button" onClick={toggleVisibility} className="focus:outline-none">
                      {isVisible ? (
                        <EyeOffIcon className="text-gray-400 hover:text-[#6b4ce6] transition-colors" size={20} />
                      ) : (
                        <EyeIcon className="text-gray-400 hover:text-[#6b4ce6] transition-colors" size={20} />
                      )}
                    </button>
                  }
                  classNames={{
                    base: "max-w-full",
                    mainWrapper: "h-12",
                    input: "text-base",
                    inputWrapper: [
                      "h-12",
                      "bg-white",
                      "hover:bg-white/60",
                      "group-data-[focused=true]:bg-white",
                      "!cursor-text",
                      "shadow-sm",
                    ],
                  }}
                  isDisabled={isLoading || isSuccess}
                />
              </div>
              <Button
                type="submit"
                className={`w-full h-12 text-white text-lg font-medium transition-all duration-300 ${
                  isLoading || isSuccess 
                    ? 'bg-[#8b74ea]' 
                    : 'bg-[#6b4ce6] hover:bg-[#5a3dd4] hover:scale-[1.02] active:scale-[0.98]'
                }`}
                disabled={isLoading || isSuccess}
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                      <span className="text-purple-500">Ingresando...</span>
                    </motion.div>
                  ) : isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="text-blue-500" size={20} />
                      <span className="text-blue-500">¡Bienvenido!</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <span>Ingresar</span>
                      <ArrowRight className="ml-2" size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </form>
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg"
                >
                  <p className="text-red-500 text-center text-sm">
                    {error}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  )
}

