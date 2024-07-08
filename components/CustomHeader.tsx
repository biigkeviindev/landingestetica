import React from "react";
import MobileMenu from "./MobileMenu";

const CustomHeader = () => {
  return (
    <>
      <header className="hidden lg:flex  flex-col container mx-auto h-[4rem] items-center absolute left-0  right-0 text-white ">
        <div className="flex justify-center border-b mb-6 pt-4">
          <p className="font-light px-[15rem]">
            Los mejores servicios de estética, masajes y tratamiento de uñas
          </p>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <a href="/">
              <img
                className="w-32 absolute left-32 top-8"
                src="/logo-simple-hd.png"
                alt="Logo Anastasia"
              />
            </a>
          </div>
          <nav className="flex gap-20 mx-14">
            <a href="/">
              <p className="cursor-pointer">Inicio</p>
            </a>
            <a href="/precios">
              <p className="cursor-pointer">Precios</p>
            </a>
            <a href="/galeria">
              <p className="cursor-pointer">Galeria</p>
            </a>
            <p className="cursor-pointer">Contacto</p>
            <a href="/blog">
              <p className="cursor-pointer">Blog</p>
            </a>
          </nav>
        </div>
      </header>
      <header className="flex justify-between px-4 items-center lg:hidden w-full h-18 bg-black">
        <div className="w-1/2">
          <img
            className="w-[70px]"
            src="/logo-simple-hd.png"
            alt="Logo Anastasia"
          />
        </div>
        <div className="flex justify-end w-1/2">
          <MobileMenu />
        </div>
      </header>
    </>
  );
};

export default CustomHeader;
