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
    <div>
      <div className="flex gap-4">
        <div className="w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          id, accusantium eligendi tempora rerum nulla officia deleniti
          reprehenderit quaerat blanditiis dolorem odit hic cupiditate delectus
          quae obcaecati libero sint culpa.
        </div>
        <div className="flex-1">
          <Slider />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center mt-8">
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
