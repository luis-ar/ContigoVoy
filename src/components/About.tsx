"use client";

import { useEffect, useState } from "react";
import anime from "animejs";

const AnimatedText: React.FC<{ text1: string; text2: string }> = ({ text1, text2 }) => {
  useEffect(() => {
    const animateText = () => {
      const part1Wrapper = document.querySelector(".animated-part1");
      const part2Wrapper = document.querySelector(".animated-part2");

      if (part1Wrapper && part2Wrapper) {
        part1Wrapper.innerHTML = text1
          .split("")
          .map((letter: string) => `<span class='letter'>${letter}</span>`)
          .join("");

        part2Wrapper.innerHTML = text2
          .split("")
          .map((letter: string) => `<span class='letter'>${letter}</span>`)
          .join("");
      }

      anime.timeline({ loop: false, autoplay: true })
        .add({
          targets: ".animated-part1 .letter",
          scale: [4, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el, i) => 70 * i,
        })
        .add({
          targets: ".animated-part2 .letter",
          scale: [4, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el, i) => 70 * i,
        });
    };

    animateText();
  }, [text1, text2]);

  return (
    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left">
      <span className="animated-part1 text-purple-700"></span>{" "}
      <span className="animated-part2 text-sky-500"></span>
    </h1>
  );
};

const About = () => {
  const sections = [
    {
      text1: "Estamos contigo",
      text2: "Y para ti",
      paragraph:
        "Con nuestras terapias virtuales, transformamos tu vida y te acompañamos en cada paso de tu camino hacia la sanación.",
      button: true,
      background: "https://s3-alpha-sig.figma.com/img/5093/14f7/ff037fdfb79a06da3e16d798d3ef02db?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C78Qpl0t9Nr9exDSTl81UohzJp-tprWDmH7LEiOQq425A3wvI7JmVF2z6j3vly12lxMOL-F0PCiAkVDwb1LUZFltQPZkQ1QqoQ916sGn7Nhp0aumvxowHuqqcNdIu07E5WcKFJUcNPpwHiTlaiq~CP8pEQCGqvckQqUoz3a4Uu0cmvv~t5rXs2qEz7vYmaldjuLb2JB8l9kIYULGdd888nFT0TaaSYOMrHvC8CPiid63WM4ymSY1xl23TxtNxvdNpTSRcai1XZnqo50EAAhuipdImNpgKboEhN6puevgope~UomyThv1xGS98JEyuhWrW6I2-hDUN9uUVLHD0CCV6w__",
    },
    {
      text1: "Apoyo a un",
      text2: "clic de distancia",
      paragraph:
        "Nuestras terapias virtuales te permiten cuidar de tu bienestar desde la comodidad de tu hogar cuando más lo necesites.",
      button: true,
      background: "https://media.istockphoto.com/id/1984757470/es/foto/adolescente-en-sesi%C3%B3n-de-terapia-con-profesional-de-la-salud-mental.jpg?s=612x612&w=0&k=20&c=7niY7hPolhzZ9dxalr1rOobUwHtHoaMKfp392FGgCWk=",
    },
    {
      text1: "Tu bienestar emocional",
      text2: "Inicia Aquí",
      paragraph:
        "Transforma tu vida con nuestras terapias diseñadas para ayudarte a sanar y crecer.",
      button: true,
      background: "https://media.istockphoto.com/id/1041156320/es/foto/terapeuta-en-el-trabajo.jpg?s=612x612&w=0&k=20&c=yezXppi48yAwGVmrRyFq3zAWjAxOb7kf2xHOTpuagaI=",
    },
    {
      text1: "No dejemos que el",
      text2: "Silencio sea el enemigo",
      paragraph:
        "8 de cada 10 peruanos no reciben la atención mental que necesitan.",
      button: true,
      background: "https://media.istockphoto.com/id/1473155461/es/foto/enfermera-manos-y-paciente-mayor-en-empat%C3%ADa-seguridad-y-apoyo-de-ayuda-confianza-y-consultor%C3%ADa.jpg?s=612x612&w=0&k=20&c=euqDs9j39vBMvZHq16Rj2XvXAlySacTMQuxn1eq9tSM=",
    },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [sections.length]);

  const section = sections[currentSection];

  return (
    <div
      className="h-[800px] w-[100%] flex flex-col justify-center items-start text-left text-white px-4 md:px-16"
      style={{
        backgroundImage: `linear-gradient(#634AE27A, #634AE27A), url(${section.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-xl">
        <AnimatedText text1={section.text1} text2={section.text2} />
        <p className="text-lg text-gray-200 mt-4">
          {section.paragraph}
        </p>
        {section.button && (
          <button className="bg-[#634AE2] text-white py-2 px-6 rounded-lg hover:bg-purple-700 mt-6">
            Reservar Cita
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
