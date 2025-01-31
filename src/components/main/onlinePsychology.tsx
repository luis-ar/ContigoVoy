'use client'
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

export default function OnlinePsychology() {
  const features = [
    {
      icon: <Image src={'/terapiaonline.png'} alt="especialista" width={70} height={60} />,
      title: "Recibe terapia en casa",
      description:
        "Accede a sesiones por videollamada o llamada disfrutando de la comodidad de tu hogar.",
      background:
        "https://s3-alpha-sig.figma.com/img/3132/77b1/b31a6f475584b983c42530e58824b3ea?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxlKK8UDuAvd5LYjXs7y0j1EA5oEFt7iabX9abmS3HJaWvX5Izy7tpwcYYGf30Ga~n0fcwfzqgZvnJWNeZ6feqYMIBGRuO-wINuPAKrrN02ffktvDgA8AM2Kcr9ckxNMVG7KnSO0O3kWA6kGxdKbnIgSBCabZaofocCGonNu8KlzQevtvEglhgbzKrdcNSyR0gIKq7EkaONtfWcNA~TkYIG7oXmnZF1W2jM~Ue3NKW7vKiKykUqwuvTtP0IMg5wWnpVu2wGuq8S1yXIEZoEU0txpzZ-6iW-CVwQnqgDCwaujih~AZTCxSpBJfDwSjxCclpD3VZ2h9anRl-hk0mcAVw__",
    },
    {
      icon: <Image src={'/listapsicologo.png'} alt="especialista" width={70} height={60} />,
      title: "Elige a tu psicólogo",
      description:
        "Te asignamos un psicólogo colegiado que te guiará en cada sesión, con técnicas efectivas para tus necesidades.",
      background:
        "https://s3-alpha-sig.figma.com/img/9ae0/31f3/7d2d34cae97cd623514d617f006063bb?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DY0prBI9zU-jGDy47Oa-Y~Mg8gA0LrioPG--Z4vk3l5MQ7f24PBx9w-95sKRLdIIUngUYc1lJKbX2pZe8hSpJqtGQw75xhyE-k0aEpe7P-hevnyx4XxIssg4SyL-aGZTFju7Pig01-dt-5z5e~sb3aj3UvIoWraMySlUTSi~bRxnXwBjT8qi-7lWUdHSj0yXEkYWQwZMFZgOyiKvKj6EgqLm~Kkuo9uHIEB-t2e-eX1uj55itA1fR2FunbwbkqwHXEVkTtFNvkSlqHBJGH4M2-3RxlDkTvtJxamsoE7XMGqsfy0T23Gz-b-Bu2G-WttPckAXHB6W63csi4s-HtKdDQ__",
    },
    {
      icon: <Image src={'/terapiaencasa.png'} alt="especialista" width={70} height={60} />,
      title: "Inicia tu terapia en línea",
      description:
        "Conéctate a tu consulta psicológica a través de contigo voy y empieza tu proceso terapéutico.",
      background:
        "https://s3-alpha-sig.figma.com/img/dee2/6e1e/d1494050fb82efbf3a1abf7acd168b4a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gt3huJZr8WCF~-zqWoySPumF5ucOuQJYpBOOgyr-WMmZNRGWyfjZlfNhk-YFrelViiEFwOLxOxHjcx~QTMOWBpPKH4OUiSc0TUKL01ftmsGZPbnCO59i9FVnJKfdNtPBh-VjHiFKPwQg70N8t0WeAoA~dzWuOvhToXprp7SYNfZ19l~go7ye8VmACjhY2Z5gmhTZe4dRmPWa5hhrMWw1Q1HHl0E4RtFRFOECmK7cmfVkTJM5x60EZlrxdd8~-wa~x9H5HUa9kHpNCXh7a-qjl6lt16FQMAqTJtT5m-d5pAeI5V~ndfzyZf-HCNxi4DPR6-YgJcnskY~uka2pU18s5Q__",
    },
    {
      icon: <Image src={'/agendahorario.png'} alt="especialista" width={70} height={60} />,
      title: "Agenda tu horario ideal",
      description:
        "Programa tus sesiones en el día y la hora que mejor se ajusten a tu rutina.",
      background:
        "https://s3-alpha-sig.figma.com/img/2a30/d790/a826d67959cfa5f4466aebac891d5712?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eCDABH83yfO5rMrl9kQ~mZaqA0PLvQhDyeUGO6Q-ufaQB5879AMWvtQNilaQZVEgctwxBkYEPhqKuCP8KRBp0d37-6zrLYUhY6dJwpjd-bonxZgc4HdV4VaYKNaemfvxf42nmKmaLcvQD4u9roROCaHHRDkw6dHmZcLb67zSJYHJdLSO23m7cSx~V1EwvjBwwF0Qsd0SKfiegpgpBqj9ktgdcv-~iWQECjD7vaUsdpropuVt~lUZcWRyXCt~OAu6sBzHwZSu~sUjjpvcNU6QPeoVVTB~mjhrdvoZoi~htx2z71mJfBCxy0m9-1Jx7OdUrfhN3sY3812PFaHhy4dsHA__",
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
    <div className="w-full max-w-full flex flex-col items-center justify-center px-4 py-16 bg-background_celeste relative overflow-hidden">
      <div className="relative w-full max-w-6xl max-lg:flex max-lg:flex-col max-lg:items-center">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-20 w-fit max-w-2xl mx-auto md:mx-0"
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
                <span className="block">
                  {feature.title}
                </span>
              </h3>
              <p className="text-base text-white max-w-[16rem] mt-3 mx-auto md:mx-0">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="hidden lg:block absolute top-1/2 lg:ml-[850px] xl:ml-[950px] mt-[50px] transform -translate-y-1/2 xl:w-[800px] xl:h-[800px] lg:w-[600px] lg:h-[600px]">
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
    </div>
  );
}
