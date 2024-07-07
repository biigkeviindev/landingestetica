import React from 'react';

const Footer = () => {
    return (
        <footer className='flex gap-8 pb-8'>
            <div className='w-1/3'>
                <p className='section-title mb-6'>Logo</p>
                <p className='section-subtitle'>Bienvenida al Salon Anastasia, visita nuestras instalaciones para disfrutar de los mejores servicios de estética y masajes.</p>
                <div className='py-6 flex'>
                    <img className='w-[58px] h-[58px] mr-4' src="/001-facebook.png" alt="Facebook" />
                    <img className='w-[58px] h-[58px]' src="/002-instagram.png" alt="Instagram" />
                </div>
            </div>
            <div className='w-1/3'>
                <h5 className='font-bold mb-6'>Nuestros salones</h5>
                <div>
                    <p><b>Dirección:</b> Calle Príncipe Don Juan Carlos 2. Local 5 posterior, CP 28924 Alcorcon (Madrid)</p>
                    <p><b>Telefono:</b>+34 624 02 33 25</p>
                    <p><b>Email:</b>nastia.hardley1@gmail.com</p>
                </div>
            </div>
            <div className='w-1/3'>
                <h5 className='font-bold mb-6'>Nuestros horarios</h5>
                <p><b>Martes a sábado:</b> De 10:00 a 14:00 y 16:00 a 20:00</p>
            </div>
        </footer>
    );
};

export default Footer;