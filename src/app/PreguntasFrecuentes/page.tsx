"use client";
import AccordionQuest from "@/components/AccordionQuest";

export default function App() {
  return (
    <>
      <div className="text-center font-bold text-5xl pt-[119px]  pb-[41px] text-[#634AE2]">
        Preguntas Frecuentes
      </div>
      <div className="grid gap-4 mx-auto pb-28 max-w-3xl ">
        <AccordionQuest
          Question="¿Cuánto cuesta la consulta?"
          Answer={
            <>
              La <strong>primera consulta diagnóstica </strong>tiene un costo de{" "}
              <strong>X soles</strong>. Las consultas regulares tienen un valor
              de <strong>X soles</strong>, pero al iniciar tu tratamiento, el
              psicólogo te ofrecerá un paquete personalizado con sesiones a
              partir de <strong>X soles</strong>.
            </>
          }
        />
        <AccordionQuest
          Question="¿Cuánto va a costar y durar mi terapia"
          Answer={
            <>
              Cada persona es única, por lo que no podemos estimar el tiempo ni
              el costo sin la <strong>primera consulta</strong>. Allí, el
              especialista brindará un diagnóstico preciso y personalizará tu
              terapia para garantizar los mejores resultados.
            </>
          }
        />
        <AccordionQuest
          Question="¿Qué tipo de terapia manejan los psicólogos?"
          Answer={
            <>
              Nuestros especialistas están altamente capacitados en 
              <strong> terapia cognitivo conductual</strong>, uno de los enfoques
              más efectivos y respaldados científicamente en la actualidad para
              el tratamiento de diversas condiciones psicológicas.
            </>
          }
        />
        <AccordionQuest
          Question="¿Cuánto duran las sesiones?"
          Answer={
            <>
              Tanto la <strong>primera consulta</strong> como las <strong>consultas regulares</strong> con
              nuestros psicólogos en Lima, Perú, tienen una duración de <strong>60
              minutos.</strong>
            </>
          }
        />
        <AccordionQuest
          Question="¿Cuáles son los métodos de pago para reservar mi consulta?"
          Answer={
            <>
              Para facilitar el proceso te brindamos diversas formas de pago
              como; transferencia bancaria, Yape o Plin.
            </>
          }
        />
      </div>
    </>
  );
}
