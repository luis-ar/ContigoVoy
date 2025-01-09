import CardServices from "@/components/CardServices";
import Slider from "@/components/Slider";

export default function Home() {
  const services = [
    {
      title: "Servicio 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id, accusantium eligendi tempora rerum nulla officia deleniti reprehenderit quaerat blanditiis dolorem odit hic cupiditate delectus quae obcaecati libero sint culpa.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4ohyCfSw224R31RSyR_ijVNCCX0ytw8xog&s",
    },
    {
      title: "Servicio 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id, accusantium eligendi tempora rerum nulla officia deleniti reprehenderit quaerat blanditiis dolorem odit hic cupiditate delectus quae obcaecati libero sint culpa.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4ohyCfSw224R31RSyR_ijVNCCX0ytw8xog&s",
    },
    {
      title: "Servicio 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id, accusantium eligendi tempora rerum nulla officia deleniti reprehenderit quaerat blanditiis dolorem odit hic cupiditate delectus quae obcaecati libero sint culpa.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4ohyCfSw224R31RSyR_ijVNCCX0ytw8xog&s",
    },
  ];
  return (
    <div className="">
      <div className="flex gap-4 p-6 bg-purple-200 dark:bg-purple-500">
        <div className="w-2/3 flex-col space-y-5">
          <h1 className="text-l font-extrabold mt-8 text-white">TERAPIAS ONLINE</h1>
          <h1 className="text-6xl font-bold text-purple-700">Estamos contigo ... <span className="text-sky-500"> y para ti</span></h1>
          <p className="text-xl text-white">
            Con nuestras terapias virtuales, transformamos tu vida y te acompañamos en cada paso de tu camino hacia la sanción</p>
          <div className="flex flex-wrap items-center justify-center">
            <button className="text-gl text-white bg-purple-700 px-4 py-2 border shadow rounded-xl" >Más información</button>
          </div>
        </div>
        <div className="flex-1">
          <Slider />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center mt-8 ">
        {services.map((service, index) => (
          <CardServices
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
