import React from 'react';

const CustomHeader = () => {
    return (
        <header className='flex flex-col container mx-auto h-[4rem] items-center absolute left-0  right-0 w-screen px-12 text-white'>
            <div className='flex justify-center border-b w-full mb-6 pt-4'>
                <p className='font-light'>Los mejores servicios de estética y tratamiento de uñas.</p>
            </div>
            <div className='flex'>
                <div className='w-1/3'>
                    <p>Logo</p>
                </div>
                <nav className='flex gap-20 mx-14'>
                    <p className='cursor-pointer'>Precios</p>
                    <p>Galeria</p>
                    <p>Uñas</p>
                    <p>Contacto</p>
                    <p>Blog</p>
                </nav>
            </div>

        </header>
    );
};

export default CustomHeader;