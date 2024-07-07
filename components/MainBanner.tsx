import React from 'react';

const MainBanner = () => {
    return (
        <div className='flex justify-center items-center h-[70vh] bg-main-banner shadow-image w-full'>
            <div>
                <span className='text-center'>
                    <ul className='flex justify-center gap-10 text-white mb-6'>
                        <li className='banner-little'>UÑAS</li> |
                        <li className='banner-little'>PESTAÑAS</li>|
                        <li className='banner-little'>DEPILACIÓN</li>
                    </ul>
                </span>
                <h2 className=' text-center mb-14 banner-title w-[50rem]'>VIVE UNA EXPERIENCIA ÚNICA EN NUESTROS CENTROS DE BELLEZA</h2>
                <div className='flex justify-center gap-40'>
                    <button className='border border-1 px-10 py-4 font-bold text-white'>
                        PEDIR CITA
                    </button>
                    <button className='border border-1 px-10 py-4 font-bold text-white'>
                        CANCELAR CITA
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;