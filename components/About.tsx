import React from 'react';

const About = () => {
    return (
        <section className='h-[100vh] flex items-center bg-white p-4 rounded-lg mt-12 mb-12 shadow-lg'>
            <div className='flex'>
                <div className='w-[50%]'>
                    <img src="/estetica.png" className='w-[35rem] ' />
                </div>
                <div className='w-[50%]'>
                    <h4 className='section-title mb-10'>SALÓN DE BELLEZA EN VALENCIA
                    </h4>
                    <p>{abouttext}</p>
                </div>
            </div>
        </section>
    );
};

const abouttext = `Pedicura, manicura, depilación y por supuesto, las uñas de gel son algunos de los servicios que ofrecen los salones de belleza. Por esta razón aquí te traemos los servicios más solicitados en los centros de belleza de tu elección. En Z-Uñas lograrás adquirir gran parte de estos servicios que representan una excelente opción si deseas realizarte el mantenimiento completo sin necesidad de ir a varios sitios.
Somos especialistas en belleza de manos, especialmente en lo relativo a la estética y cuidado de tus uñas. Disponemos de los mejores tratamientos, marcas, servicios y profesionales para que puedas lucir, en tu lugar de trabajo, para un evento especial o simplemente por darte un capricho, esas uñas perfectas que todas deseamos.
El servicio de depilación es uno de los más demandados. Nos encanta tomar el sol, lucir nuestras piernas y ciertamente, con el clima que tenemos en esta magnífica ciudad siempre intentamos usar la ropa más cómoda posible. Por esta razón, tanto por estética como por comodidad, la depilación de piernas, axilas e ingles se vuelve ley entre la juventud.
Otro toque bastante utilizado está en nuestras pestañas. Cada vez más centros de uñas en Valencia realizan extensiones de pestañas para conseguir esa mirada cautivadora que deseas. Estas extensiones, dan otra perspectiva a tus ojos, resaltando sus colores y haciendo una mirada mucho más sexy.`
export default About;