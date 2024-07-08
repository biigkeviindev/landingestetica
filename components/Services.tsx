import React from "react";

const servicesList = [
  {
    name: "PELUQUERÍA",
    style: "color-main",
    border: "border-main",
    sub: ["Cortes", "Tinte del cabello", "Recogidos"],
    link: "http://google.es",
    image: "/peluqueria.jpg",
  },
  {
    name: "MASAJES",
    style: "color-secondary",
    border: "border-secondary",
    sub: ["Maderoterapia", "Presoterapia", "Cavitación"],
    link: "http://google.es",
    image: "/masajes.jpg",
  },
  {
    name: "UÑAS",
    style: "color-main",
    border: "border-main",
    sub: ["Manicura combinada", "Extensiones de las uñas", "Pedicura completa"],
    link: "http://google.es",
    image: "/masaje.jpg",
  },
];

const Services = () => {
  return (
    <div className="m-h-[70vh] flex flex-col justify-center items-center pt-[5rem] mb-[4rem] lg:mb-[10rem]">
      <div className="mb-[4rem] text-center">
        <h2 className="section-title">SERVICIOS</h2>
        <span>7 centros de belleza en valencia</span>
      </div>
      <div className="flex flex-wrap px-4 lg:flex-nowrap lg:gap-10 w-100">
        {servicesList.map((service) => (
          <div className="w-[100%] mb-6">
            <img
              className="mb-10 rounded-lg w-[100%] h-[30rem]"
              src={service.image}
              alt=""
            />
            <div className="text-center">
              <span className={`text-[12px] ${service?.style} gap-3`}>
                {service.sub.map((serviceItem) => `| ${serviceItem} |`)}
              </span>
              <h3 className={`${service?.style} text-[27px] mb-5`}>
                {service.name}
              </h3>
              <button
                className={`text-[12px] border border-2 px-10 py-3 ${service?.style} ${service?.border}`}
              >
                VER MÁS
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
