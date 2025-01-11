"use client";
import { useEffect, useState } from "react";
import anime from "animejs";

const AnimatedText: React.FC = () => {
  const phrases = [
    { part1: "Estamos contigo", part2: "y para ti" },
    { part1: "Transformamos vidas", part2: "virtualmente" },
    { part1: "Te acompañamos", part2: "en cada paso" },
    { part1: "Hacemos la diferencia", part2: "contigo" },
  ];

  const [currentPhrase, setCurrentPhrase] = useState<number>(0);

  useEffect(() => {
    const animateText = () => {
      // Selecciona las partes animadas y envuelve cada letra en un <span>
      const part1Wrapper = document.querySelector(".animated-part1");
      const part2Wrapper = document.querySelector(".animated-part2");

      if (part1Wrapper && part2Wrapper) {
        part1Wrapper.innerHTML = phrases[currentPhrase].part1
          .split("")
          .map((letter) => `<span class='letter'>${letter}</span>`)
          .join("");

        part2Wrapper.innerHTML = phrases[currentPhrase].part2
          .split("")
          .map((letter) => `<span class='letter'>${letter}</span>`)
          .join("");
      }

      // Ejecuta la animación con anime.js
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

    // Llama a la animación inicial
    animateText();

    // Cambia la frase actual cada 6 segundos
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 6000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [currentPhrase, phrases]);

  return (
    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
      <span className="animated-part1 text-purple-700"></span>{" "}
      <span className="animated-part2 text-sky-500"></span>
    </h1>
  );
};

export default AnimatedText;
