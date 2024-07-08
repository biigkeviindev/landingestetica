import React from "react";

const MainBanner = () => {
  const goWsp = () => {
    window.open('https://wa.me/34622757185', '_blank');
  }
  const call = () => {
    window.location.href = 'tel:+34622757185';
  }

  return (
    <div className="flex justify-center items-center h-[80vh] pt-10 bg-main-banner shadow-image w-full">
      <div>
        <span className="text-center">
          <ul className="flex justify-center gap-10 text-white mb-6">
            <li className="banner-little">PELUQUERIA</li> |
            <li className="banner-little">MASAJES</li>|
            <li className="banner-little">UÑAS</li>
          </ul>
        </span>
        <h2 className="text-[1.4rem] px-4 text-center mb-14 text-white md:text-[50px] font-bold uppercase md:leading-[55px] lg:w-[50rem]">
          VIVE UNA EXPERIENCIA ÚNICA EN NUESTRO CENTRO DE BELLEZA
        </h2>
        <div className="flex justify-center gap-6 lg:gap-40">
          <button className="border border-1 px-10 py-4 font-bold text-white" onClick={goWsp}>
            PEDIR CITA
          </button>
          <button className="border border-1 px-10 py-4 font-bold text-white" onClick={call}>
            LLAMANOS
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
