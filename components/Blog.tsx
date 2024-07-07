import React from 'react';

const Blog = () => {
    return (
        <section className='m-h-[30rem] flex flex-col items-center justify-center pt-[5rem] mb-[10rem]'>
            <div className='mb-10'>
                <h2 className='section-title'>BLOG</h2>
            </div>
            <div className='flex gap-10'>
                <ItemBlog />
                <ItemBlog />
                <ItemBlog />
            </div>
        </section>
    );
};

const ItemBlog = () => {
    return (
        <div className='shadow-lg bg-[#f1f2f3] rounded-lg'>
            <img src="/velas.jpg" alt="" className='w-full mb-4 h-[300px]' />
            <div className='py-6 px-2'>
                <h4 className='font-bold mb-3'>Pedicura y Jelly Spa. Perfecto para el verano.</h4>
                <p className='mb-8'>
                    Con la llegada del verano, nuestros pies se convierten en protagonistas al lucir sandalias, chanclas
                </p>
                <button className='color-secondary '>
                    LEER MÁS
                </button>
            </div>
        </div>
    )
}
export default Blog;