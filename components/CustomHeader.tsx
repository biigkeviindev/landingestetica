import React from "react";
import MobileMenu from "./MobileMenu";

const CustomHeader = () => {
  return (
    <>
      <header className="hidden lg:flex  flex-col container mx-auto h-[4rem] items-center absolute left-0  right-0 text-white ">
        <div className="flex justify-center border-b mb-6 pt-4">
          <p className="font-light">
            Los mejores servicios de estética y tratamiento de uñas.
          </p>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <img
              className="w-32 absolute left-32 top-8"
              src="/logo-simple-hd.png"
              alt="Logo Anastasia"
            />
          </div>
          <nav className="flex gap-20 mx-14">
            <a href="#prices">
              <p className="cursor-pointer">Precios</p>
            </a>
            <p className="cursor-pointer">Galeria</p>
            <p className="cursor-pointer">Uñas</p>
            <p className="cursor-pointer">Contacto</p>
            <p className="cursor-pointer">Blog</p>
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
