import React from "react";

const About = () => {
  return (
    <section className="m-h-[75vh] py-12 flex items-center bg-white p-4 mt-12 mb-12">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex justify-center items-center w-[100%] lg:w-[50%]">
          <img src="/estetica.png" className="w-[22rem] lg:w-[35rem] " />
        </div>
        <div className="w-[100%] lg:w-[50%] flex flex-col justify-center mb-4 lg:mb-0">
          <h4 className="section-title mb-10">SALÓN DE BELLEZA EN MADRID</h4>
          <p>
            ¡Descubre el encanto de Salon Anastasia! En nuestro acogedor salón
            de belleza, te invitamos a experimentar una experiencia única en
            estética y cuidado personal. Especializados en una amplia gama de
            servicios, estamos aquí para realzar tu belleza y bienestar. <br />
            <br />
            En Peluquería, ofrecemos desde cortes modernos hasta técnicas
            avanzadas como mechas, Airtouch, babylife y shatush. Nuestros
            tratamientos de renovación del cabello revitalizan y restauran tu
            melena, mientras que nuestros recogidos te hacen lucir elegante en
            cualquier ocasión. <br />
            <br />
            Relájate y rejuvenece con nuestros masajes especializados,
            incluyendo maderoterapia corporal y facial, masajes relajantes,
            presoterapia, cavitación y radiofrecuencia. Cada sesión está
            diseñada para aliviar el estrés y revitalizar tu cuerpo y mente.{" "}
            <br />
            <br />
            En el área de Uñas, ofrecemos una variedad de servicios como
            manicuras combinadas, extensiones de uñas y pedicuras completas en
            un entorno de SPA que te dejará sintiéndote renovada y lista para
            brillar. <br />
            <br />
            Además, nuestro maquillaje profesional es perfecto para novias,
            fiestas y sesiones de fotos, garantizando que luzcas espectacular en
            cualquier evento especial. <br />
            <br />
            ¡Visítanos en Salon Anastasia y descubre por qué somos el destino
            preferido para tus necesidades de belleza y cuidado personal! Te
            esperamos para consentirte y hacer que te sientas radiante en cada
            visita.
          </p>
        </div>
      </div>
    </section>
  );
};

const abouttext = `Pedicura, manicura, depilación y por supuesto, las uñas de gel son algunos de los servicios que ofrecen los salones de belleza. Por esta razón aquí te traemos los servicios más solicitados en los centros de belleza de tu elección. En Z-Uñas lograrás adquirir gran parte de estos servicios que representan una excelente opción si deseas realizarte el mantenimiento completo sin necesidad de ir a varios sitios.
Somos especialistas en belleza de manos, especialmente en lo relativo a la estética y cuidado de tus uñas. Disponemos de los mejores tratamientos, marcas, servicios y profesionales para que puedas lucir, en tu lugar de trabajo, para un evento especial o simplemente por darte un capricho, esas uñas perfectas que todas deseamos.
El servicio de depilación es uno de los más demandados. Nos encanta tomar el sol, lucir nuestras piernas y ciertamente, con el clima que tenemos en esta magnífica ciudad siempre intentamos usar la ropa más cómoda posible. Por esta razón, tanto por estética como por comodidad, la depilación de piernas, axilas e ingles se vuelve ley entre la juventud.
Otro toque bastante utilizado está en nuestras pestañas. Cada vez más centros de uñas en Valencia realizan extensiones de pestañas para conseguir esa mirada cautivadora que deseas. Estas extensiones, dan otra perspectiva a tus ojos, resaltando sus colores y haciendo una mirada mucho más sexy.`;
export default About;
