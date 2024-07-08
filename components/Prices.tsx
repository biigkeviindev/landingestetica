import { services_prices } from "@/constants";
import React from "react";

const Prices = () => {
  return (
    <section className="py-[2rem] lg:py-[5rem] px-10" id="prices">
      <div>
        <h2 className="mb-10 lg:mb-20 section-title">
          ALGUNOS DE NUESTROS PRECIOS
        </h2>
        <div>
          {services_prices.map((service, key) => (
            <div key={key} className=" mb-4 border-b border-[#cccccc]">
              <div className="flex justify-between">
                <h5 className="color-main font-bold text-[19px]">
                  {service.title}
                </h5>
                <p className="color-main font-bold text-[19px]">
                  Desde {service.price}€
                </p>
              </div>
              {service.extra && <p className="text-[14px]">{service.extra}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
