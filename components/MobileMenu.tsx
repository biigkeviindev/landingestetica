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
      <button
        onClick={toggleMenu}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Abrir Menú
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
        >
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
          >
            Opción 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
          >
            Opción 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
          >
            Opción 3
          </a>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
