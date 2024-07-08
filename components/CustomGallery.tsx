import { GalleryItems } from "@/constants";
import Link from "next/link";
import React from "react";

const CustomGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-[90px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GalleryItems?.map((entry, key) => (
          <div
            key={key}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={`/${entry}`}
              alt="Imagen 1"
              className="w-full h-auto lg:h-[450px]"
            />
          </div>
        ))}
      </div>
      <div className="py-4 flex justify-center">
        <Link
          target="_blank"
          href="https://www.instagram.com/salon.anastasia.agnes/?igsh=MWduYTA1MnY4NmpwOQ%3D%3D"
        >
          <button className="flex items-center shadow-lg gap-3 border border-black border-1 px-10 py-4 font-bold text-black">
            <img
              className="w-[30px] h-[30px]"
              src="/002-instagram.png"
              alt="Instagram"
            />
            Seguir en Instagram
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CustomGallery;
