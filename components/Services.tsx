import React from 'react';


const servicesList = [
    {
        name: 'SERVICIO 1',
        style: 'color-main',
        border: 'border-main',
        sub: ['MANICURA', 'PEDICURA', 'ESMALTE'],
        link: 'http://google.es',
        image: 'https://media.istockphoto.com/id/1320934166/es/foto/productos-cosm%C3%A9ticos-para-el-cuidado-de-la-piel-en-hojas-verdes.jpg?s=612x612&w=0&k=20&c=z0Q4DaqVsgqCGc3bnuiKWRPkEM10Gl9YUxr7yIpvEk0='
    },
    {
        name: 'SERVICIO 2',
        style: 'color-secondary',
        border: 'border-secondary',
        sub: ['MANICURA', 'PEDICURA', 'ESMALTE'],
        link: 'http://google.es',
        image: 'https://media.istockphoto.com/id/1320934166/es/foto/productos-cosm%C3%A9ticos-para-el-cuidado-de-la-piel-en-hojas-verdes.jpg?s=612x612&w=0&k=20&c=z0Q4DaqVsgqCGc3bnuiKWRPkEM10Gl9YUxr7yIpvEk0='
    },
    {
        name: 'SERVICIO 3',
        style: 'color-main',
        border: 'border-main',
        sub: ['MANICURA', 'PEDICURA', 'ESMALTE'],
        link: 'http://google.es',
        image: 'https://media.istockphoto.com/id/1320934166/es/foto/productos-cosm%C3%A9ticos-para-el-cuidado-de-la-piel-en-hojas-verdes.jpg?s=612x612&w=0&k=20&c=z0Q4DaqVsgqCGc3bnuiKWRPkEM10Gl9YUxr7yIpvEk0='
    },
]

const Services = () => {
    return (
        <div className='h-[70vh] flex flex-col justify-center items-center pt-[5rem] mb-[10rem]'>
            <div className='mb-[4rem] text-center'>
                <h2 className='section-title'>SERVICIOS</h2>
                <span>7 centros de belleza en valencia</span>
            </div>
            <div className='flex gap-10'>
                {
                    servicesList.map((service) => (
                        <div>
                            <img className='mb-10 rounded-lg' src={service.image} alt='' />
                            <div className='text-center'>
                                <span className={`text-[12px] ${service?.style}`}>MANICURA - PEDICURA - GEL - ESMALTE</span>
                                <h3 className={`${service?.style} text-[27px] mb-5`}>{service.name}</h3>
                                <button className={`text-[12px] border border-2 px-10 py-3 ${service?.style} ${service?.border}`}>
                                    VER MÁS
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;