"use client";
import { useEffect, useState, useRef } from "react";
import anime from "animejs";

const AnimatedText: React.FC = () => {
  const phrases = [
    { part1: "Estamos contigo", part2: "y para ti" },
    { part1: "Apoyo a un", part2: "click de distancia" },
    { part1: "Tu bienestar emocional", part2: "inicia aqui" },
    { part1: "No dejemos que el", part2: "silencio sea el enemigo" },
  ];

  const [currentPhrase, setCurrentPhrase] = useState<number>(0);
  const isAnimating = useRef<boolean>(false);

  useEffect(() => {
    const animateText = () => {
      if (isAnimating.current) return;
      isAnimating.current = true;
      // Selecciona las partes animadas y envuelve cada letra en un <span>
      const part1Wrapper = document.querySelector(".animated-part1");
      const part2Wrapper = document.querySelector(".animated-part2");

      if (part1Wrapper && part2Wrapper) {
        part1Wrapper.innerHTML = phrases[currentPhrase].part1
          .toLowerCase()
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
          duration: 800,
          delay: (el, i) => 70 * i,
        })
        .add({
          targets: ".animated-part2 .letter",
          scale: [4, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 800,
          delay: (el, i) => 70 * i,
        
          offset: 0,
        });
    };

    // Llama a la animación inicial
    animateText();

    // Cambia la frase actual cada 5 segundos
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 5000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [currentPhrase, phrases]);

  return (
    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
      <span className="animated-part1 text-white"></span>{" "}
      <span className="animated-part2 text-white block"></span>
    </h1>
  );
};

export default AnimatedText;
