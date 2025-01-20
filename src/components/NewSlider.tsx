"use client";

import { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import anime from "animejs";
import "../app/globals.css";

const Probar = () => {
  const sections = [
    {
      phrase: "Estamos contigo <br> y para ti",
      smallPhrase: "Con nuestras terapias virtuales, transformamos <br> tu vida y te acompañamos en cada paso de tu <br> camino hacia la sanación.",
      button: true,
      background:
        "https://s3-alpha-sig.figma.com/img/5093/14f7/ff037fdfb79a06da3e16d798d3ef02db?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C78Qpl0t9Nr9exDSTl81UohzJp-tprWDmH7LEiOQq425A3wvI7JmVF2z6j3vly12lxMOL-F0PCiAkVDwb1LUZFltQPZkQ1QqoQ916sGn7Nhp0aumvxowHuqqcNdIu07E5WcKFJUcNPpwHiTlaiq~CP8pEQCGqvckQqUoz3a4Uu0cmvv~t5rXs2qEz7vYmaldjuLb2JB8l9kIYULGdd888nFT0TaaSYOMrHvC8CPiid63WM4ymSY1xl23TxtNxvdNpTSRcai1XZnqo50EAAhuipdImNpgKboEhN6puevgope~UomyThv1xGS98JEyuhWrW6I2-hDUN9uUVLHD0CCV6w__",
    },
    {
      phrase: "Apoyo a un <br> click de distancia",
      smallPhrase: "Nuestras terapias virtuales te permiten cuidar <br> de tu bienestar desde la comodidad de tu <br>hogar cuando más lo necesites.",
      button: true,
      background:
        "https://media.istockphoto.com/id/1984757470/es/foto/adolescente-en-sesi%C3%B3n-de-terapia-con-profesional-de-la-salud-mental.jpg?s=612x612&w=0&k=20&c=7niY7hPolhzZ9dxalr1rOobUwHtHoaMKfp392FGgCWk=",
    },
    {
      phrase: "Tu bienestar emocional <br> inicia aqui",
      smallPhrase: "Transforma tu vida con nuestras <br> terapias diseñadas para ayudarte <br> a sanar y crecer.",
      button: true,
      background:
        "https://media.istockphoto.com/id/1041156320/es/foto/terapeuta-en-el-trabajo.jpg?s=612x612&w=0&k=20&c=yezXppi48yAwGVmrRyFq3zAWjAxOb7kf2xHOTpuagaI=",
    },
    {
      phrase: "No dejemos que el <br> silencio sea el enemigo",
      smallPhrase: "8 de cada 10 peruanos no reciben <br> la atención mental que necesitan. <br>",
      button: true,
      background:
        "https://media.istockphoto.com/id/1473155461/es/foto/enfermera-manos-y-paciente-mayor-en-empat%C3%ADa-seguridad-y-apoyo-de-ayuda-confianza-y-consultor%C3%ADa.jpg?s=612x612&w=0&k=20&c=euqDs9j39vBMvZHq16Rj2XvXAlySacTMQuxn1eq9tSM=",
    },
  ];

  const [currentPhrase, setCurrentPhrase] = useState<number>(0);
  const isAnimating = useRef<boolean>(false);

  useEffect(() => {
    const animateText = () => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      // Selecciona la parte animada de la frase
      const part1Wrapper = document.querySelector(".animated-part1");
      if (part1Wrapper) {
        part1Wrapper.innerHTML = sections[currentPhrase].phrase
          .split(" ")
          .map((word) => `<span class='word'>${word}</span>`)
          .join(" ");  // Dividimos la frase en palabras

        // Animación con anime.js
        anime.timeline({ loop: false, autoplay: true })
          .add({
            targets: ".animated-part1 .word",
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 800,
            delay: (el, i) => 70 * i,
          })
          .finished.then(() => {
            isAnimating.current = false;
          });
      }
    };

    const timer = setTimeout(animateText, 200);
    return () => clearTimeout(timer);  

  }, [currentPhrase]);

  const handleSlideChange = (splide: any) => {
    setCurrentPhrase(splide.index);
  };

  return (
    <div className="h-[800px] w-[100%]">
      <Splide
        options={{
          type: "fade",
          height: "100%",
          pagination: true,
          arrows: false,
          autoplay: true,
          interval: 10000,
          pauseOnHover: false,
          loop: true,
        }}
        onMove={handleSlideChange}
      >
        {sections.map((section, index) => (
          <SplideSlide key={index} id={`slide-${index}`}>
            <div
              className="h-[600px] w-[100%] flex flex-col justify-center items-start text-left text-white px-4 md:px-16"
              style={{
                backgroundImage: `linear-gradient(#634AE27A, #634AE27A), url(${sections[currentPhrase].background})`, // Aquí cambiamos el fondo según el índice de currentPhrase
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex gap-4 p-6 flex-col md:flex-row justify-center items-center mt-[-160px]">
                <div className="flex-1 lg:w-2/3 flex-col space-y-20 flex">
                  <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animated-part1">
                  <span dangerouslySetInnerHTML={{ __html: section.phrase }} />
                  </h1>
                  <span dangerouslySetInnerHTML={{ __html: sections[currentPhrase].phrase }} />
                </div>
              </div>
              {section.button && (
                <button className="bg-[#634AE2] text-white py-2 px-6 rounded-[30px] hover:bg-purple-700 mt-6 ml-5">
                  Reservar Cita
                </button>
              )}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Probar;