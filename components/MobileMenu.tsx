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
        className="w-[30px] cursor-pointer"
        src="/menu.png"
        alt="Logo Anastasia"
      />
      {isOpen && (
        <div
          ref={menuRef}
          className="right-9 absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
        >
          <nav className="flex flex-col gap-8 px-3 py-6">
            <Link href="/">
              <p className="cursor-pointer border-b">Inicio</p>
            </Link>
            <Link href="/precios">
              <p className="cursor-pointer">Precios</p>
            </Link>
            <Link href="/galeria">
              <p className="cursor-pointer">Galeria</p>
            </Link>
            <p className="cursor-pointer">Contacto</p>
            <Link href="/blog">
              <p className="cursor-pointer">Blog</p>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
