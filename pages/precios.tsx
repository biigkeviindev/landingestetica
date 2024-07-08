import Image from "next/image";
import { Inter } from "next/font/google";
import MainBanner from "@/components/MainBanner";
import Services from "@/components/Services";
import About from "@/components/About";
import Prices from "@/components/Prices";
import Blog from "@/components/Blog";
import BannerCita from "@/components/BannerCita";
import Footer from "@/components/Footer";
import CustomHeader from "@/components/CustomHeader";
import CustomBanner from "@/components/CustomBanner";
import CustomGallery from "@/components/CustomGallery";


export default function Home() {
    return (
        <section className="relative">
            <CustomHeader />
            <CustomBanner subtitle="CENTRO DE ESTETICA" title="CALIDAD A CANTIDAD" />
            <div className="container mx-auto ">
                <Prices />
            </div>
            <BannerCita />

            <Footer />
        </section>
    );
}
