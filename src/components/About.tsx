"use client";

import { useEffect, useState } from "react";
import AnimatedText from "./AnimatedText";
import SmallAnimatedText from "./SmallAnimatedText";

const About = () => {
  const sections = [
    {
      button: true,
      background:
        "https://s3-alpha-sig.figma.com/img/5093/14f7/ff037fdfb79a06da3e16d798d3ef02db?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C78Qpl0t9Nr9exDSTl81UohzJp-tprWDmH7LEiOQq425A3wvI7JmVF2z6j3vly12lxMOL-F0PCiAkVDwb1LUZFltQPZkQ1QqoQ916sGn7Nhp0aumvxowHuqqcNdIu07E5WcKFJUcNPpwHiTlaiq~CP8pEQCGqvckQqUoz3a4Uu0cmvv~t5rXs2qEz7vYmaldjuLb2JB8l9kIYULGdd888nFT0TaaSYOMrHvC8CPiid63WM4ymSY1xl23TxtNxvdNpTSRcai1XZnqo50EAAhuipdImNpgKboEhN6puevgope~UomyThv1xGS98JEyuhWrW6I2-hDUN9uUVLHD0CCV6w__",
    },
    {
      button: true,
      background:
      "https://media.istockphoto.com/id/1984757470/es/foto/adolescente-en-sesi%C3%B3n-de-terapia-con-profesional-de-la-salud-mental.jpg?s=612x612&w=0&k=20&c=7niY7hPolhzZ9dxalr1rOobUwHtHoaMKfp392FGgCWk=",
    },
    {
      button: true,
      background:
      "https://media.istockphoto.com/id/1041156320/es/foto/terapeuta-en-el-trabajo.jpg?s=612x612&w=0&k=20&c=yezXppi48yAwGVmrRyFq3zAWjAxOb7kf2xHOTpuagaI=",
    },
    {
      button: true,
      background:
      "https://media.istockphoto.com/id/1473155461/es/foto/enfermera-manos-y-paciente-mayor-en-empat%C3%ADa-seguridad-y-apoyo-de-ayuda-confianza-y-consultor%C3%ADa.jpg?s=612x612&w=0&k=20&c=euqDs9j39vBMvZHq16Rj2XvXAlySacTMQuxn1eq9tSM=",
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
      <div className="flex gap-4 p-6 flex-col md:flex-row justify-center items-center mt-[-160px]">
        <div className="flex-1 lg:w-2/3 flex-col space-y-20 flex">
          <AnimatedText />
          <SmallAnimatedText />
        </div>
      </div>
      {section.button && (
        <button className="bg-[#634AE2] text-white py-2 px-6 rounded-[30px] hover:bg-purple-700 mt-6 ml-5">
          Reservar Cita
        </button>
      )}
      </div>
  );
};

export default About;
