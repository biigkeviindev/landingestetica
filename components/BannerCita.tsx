import React from "react";

const BannerCita = () => {
  return (
    <section className="m-h-[45vh] flex flex-col banner-cita-bg p-10 ">
      <div className="container mx-auto">
        <div>
          <span className="section-subtitle color-main">PIDE CITA PREVIA</span>
          <h5 className="section-title color-main mb-5">RESERVA YA</h5>
          <p className="text-white">
            Si estás pensando en hacernos una visita puedes hacerlo llamándonos
            al salón que te gustaría visitar o reservando online.
          </p>
        </div>
        <div className="flex pt-10 gap-40 text-white">
          <div>
            <h6 className="font-bold">PELUQUERÍA</h6>
            <span className="text-[12px]">
              Cortes, Tinte del cabello, Recogidos, Tratamiento de renovación
              del cabello.
            </span>
          </div>
          <div>
            <h6 className="font-bold">MASAJES</h6>
            <span className="text-[12px]">
              Maderoterapia corporal y facial, Masaje relajante, Presoterapia,
              Cavitación.
            </span>
          </div>
          <div>
            <h6 className="font-bold">UÑAS</h6>
            <span className="text-[12px]">
              Manicura combinada, Extensión de las uñas, Pedicura completa SPA.
            </span>
          </div>
        </div>
        <div className="py-10">
          <button className="bg-[#80BEB9]  px-16 py-4  text-white text-[13px]">
            PEDIR CITA
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerCita;
