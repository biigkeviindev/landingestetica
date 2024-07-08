import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row gap-8 py-8 px-10 text-white bg-[#000000]">
      <div className="lg:w-1/3">
        <p className="section-title mb-6">
          <img
            className="w-32 "
            src="/logo-simple-hd.png"
            alt="Logo Anastasia"
          />
        </p>
        <p className="section-subtitle !text-white">
          Bienvenida al Salon Anastasia, visita nuestras instalaciones para
          disfrutar de los mejores servicios de estética y masajes.
        </p>
        <div className="py-6 flex"></div>
      </div>
      <div className="lg:w-1/3 pr-3">
        <h5 className="font-bold mb-6 border-b-2 border-white">
          Nuestros salones
        </h5>
        <div>
          <p>
            <b>Dirección:</b> Calle Príncipe Don Juan Carlos 2. Local 5
            posterior, CP 28924 Alcorcon (Madrid)
          </p>
          <p>
            <b>Telefono:</b>+34 624 02 33 25
          </p>
          <p>
            <b>Email:</b>nastia.hardley1@gmail.com
          </p>
        </div>
      </div>
      <div className="lg:w-1/3">
        <h5 className="font-bold mb-6 border-b-2 border-white">
          Nuestros horarios
        </h5>
        <p className="mb-6">
          <b>Martes a sábado:</b> De 10:00 a 14:00 y 16:00 a 20:00
        </p>
        <a
          target="_blank"
          href="https://www.instagram.com/salon.anastasia.agnes/?igsh=MWduYTA1MnY4NmpwOQ%3D%3D"
        >
          <img
            className="w-[30px] h-[30px]"
            src="/002-instagram.png"
            alt="Instagram"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
