import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef?.current?.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="relative inline-block">
      <img
        onClick={toggleMenu}
        className="w-[30px]"
        src="/menu.png"
        alt="Logo Anastasia"
      />
      {isOpen && (
        <div
          ref={menuRef}
          className="right-9 absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
        >
          <nav className="px-4 shadow-lg pt-6 pb-3">
            <Link href="#prices" className="">
              <p className="cursor-pointer h-[2rem]">Precios</p>
            </Link>
            <p className="cursor-pointer h-[2rem]">Galeria</p>
            <p className="cursor-pointer h-[2rem]">Uñas</p>
            <p className="cursor-pointer h-[2rem]">Contacto</p>
            <p className="cursor-pointer h-[2rem]">Blog</p>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
