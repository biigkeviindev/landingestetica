import React from 'react';

const Footer = () => {
    return (
        <footer className='flex gap-8 pb-8'>
            <div className='w-1/3'>
                <p className='section-title mb-6'>Logo</p>
                <p className='section-subtitle'>Bienvenida a z-Uñas, visita nuestras instalaciones para disfrutar de los mejores servicios de estética y tratamiento de uñas.</p>
                <div className='py-6 flex'>
                    <img className='w-[58px] h-[58px] mr-4' src="/001-facebook.png" alt="Facebook" />
                    <img className='w-[58px] h-[58px]' src="/002-instagram.png" alt="Instagram" />
                </div>
            </div>
            <div className='w-1/3'>
                <h5 className='font-bold mb-6'>Nuestros salones</h5>
                <div>
                    <p><b>Avda Blasco Ibañez 126 Bajo</b>, 46022 Valencia</p>
                    <span>961 01 52 44
                    </span>
                </div>
            </div>
            <div className='w-1/3'>
                <h5 className='font-bold mb-6'>Nuestros horarios</h5>
                <p><b>Lun-Sab:</b> 9 AM – 9 PM</p>
            </div>
        </footer>
    );
};

export default Footer;