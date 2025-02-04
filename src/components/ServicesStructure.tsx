import { ServicesStructureProps } from "@/interface";
import { motion } from "framer-motion";
export default function ServicesStructure({
  services,
}: {
  services: ServicesStructureProps[];
}) {
  return (
    <div>
      {services.map((item, index) => (
        <div className="embla__slide" key={index}>
          <div className="flex justify-between mx-6  pt-6 text-[#634AE2] pb-8 font-lexend items-center ">
            <p className="text-xl font-semibold pl-[71px]">{item.title}</p>
            <div className="pr-[80px]">{item.edad}</div>
          </div>
          <div
            className="h-[578px] bg-cover flex items-center bg-center pl-[79px]"
            style={{
              backgroundImage: `linear-gradient(#634AE27A, #634AE27A),url(${item.background})`,
            }}
          >
            <div className="relative w-[661px] text-white text-left h-[230px] font-lexend font-bold text-[40px] leading-[54px]">
              {item.motto}
            </div>
          </div>
          <div className="pt-12 flex justify-center">
            <div className="max-w-[829px] text-[#634AE2] h-[89px] font-lexend font-normal text-[16px] leading-[28px] text-center">
              {item.description}
            </div>
          </div>

          <div className="pt-24 flex justify-center px-4 md:px-0">
            <div className="w-full text-[#634AE2] md:w-[937px] h-auto md:h-[74px] font-lexend font-semibold text-[20px] md:text-[24px] leading-[28px] md:leading-[33px] text-center">
              {item.tittlecards}
            </div>
          </div>
          <div className="flex justify-center py-8 px-4 md:px-8">
            <div className="flex flex-col items-center gap-y-12">
              <div className="flex flex-col  xl:flex-row   gap-y-8 md:gap-x-8">
                {item.cards?.slice(0, 3).map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col rounded-3xl bg-[#634AE2]  items-center gap-4 p-4"
                  >
                    <div className="w-full md:w-[360px] h-auto md:h-[236px] flex flex-col  rounded-lg p-4">
                      <div className="flex justify-center items-center">
                        <img
                          src={card.icon}
                          alt={card.text}
                          className="w-[140px] md:w-[183.27px] h-[68px] md:h-[88px] object-contain"
                        />
                      </div>
                      <div className="flex-grow flex items-center justify-center px-4">
                        <p className="text-center text-[14px] md:text-[16px] text-white font-lexend font-semibold leading-[20px] md:leading-[24px] w-full">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col xl:flex-row gap-y-8 md:gap-x-8">
                {item.cards?.slice(3, 5).map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col rounded-3xl bg-[#634AE2]  items-center gap-4 p-4"
                  >
                    <div className="w-full md:w-[360px] h-auto md:h-[236px] flex flex-col  rounded-lg p-4">
                      <div className="flex justify-center items-center">
                        <img
                          src={card.icon}
                          alt={card.text}
                          className="w-[140px] md:w-[183.27px] h-[68px] md:h-[88px] object-contain"
                        />
                      </div>
                      <div className="flex-grow flex items-center justify-center px-4">
                        <p className="text-center text-[14px] md:text-[16px] text-[white] font-lexend font-semibold leading-[20px] md:leading-[24px] w-full">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-24 flex justify-center">
            <div className="w-[937px] text-[#634AE2] h-[74px] font-lexend font-bold text-[24px] leading-[33px] text-center">
              {item.tittleIcon}
            </div>
          </div>

          <div className="flex justify-center py-8">
            <div className="flex pt-14 flex-col items-center gap-y-20">
              {/* Primera fila - 3 iconos */}
              <div className="flex flex-col md:flex-row lg:gap-y-0  gap-y-12 md:gap-y-0 md:gap-x-[229px]">
                {item.iconos?.slice(0, 3).map((icono, index) => (
                  <div
                    key={icono.id}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className=" rounded-full  bg-[#9494F3] p-6">
                      <div className="w-32 h-32 flex items-center justify-center">
                        <img
                          src={icono.iconImage}
                          alt={icono.text}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-center pt-3 text-[16px] text-[#634AE2] font-lexend font-semibold leading-[20px] max-w-[200px]">
                      {icono.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-y-12 md:gap-y-0 md:gap-x-[229px]">
                {item.iconos?.slice(3, 5).map((icono) => (
                  <div
                    key={icono.id}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="rounded-full bg-[#9494F3] p-6">
                      <div className="w-32 h-32 flex items-center justify-center">
                        <img
                          src={icono.iconImage}
                          alt={icono.text}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                    </div>

                    <p className="text-center pt-3 text-[16px] text-[#634AE2] font-lexend font-semibold leading-[20px] max-w-[120px]">
                      {icono.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-24">
              <div className="h-36 bg-[#DEDEFF] flex items-center justify-center px-4 sm:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1100px] space-y-4 md:space-y-0">
                  {/* Texto del footer */}
                  <p className="text-center text-[#634AE2] md:text-left max-w-[652px]">
                    {item.textfooter}
                  </p>
                  <button className="w-full md:w-[359px] h-[70px] bg-[#5A4AE8] rounded-[34px] text-white font-lexend font-normal text-[18px] md:text-[24px] leading-[33px] text-center">
                    Reserva tu cita gratuita
                  </button>
                </div>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
}
