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


export default function BlogPage() {
    return (
        <section className="relative">
            <CustomHeader />
            <CustomBanner subtitle="CENTRO DE ESTETICA" title="BLOG DE BELLEZA" />
            <div className="container mx-auto ">
                <Blog />
            </div>
            <BannerCita />

            <Footer />
        </section>
    );
}
