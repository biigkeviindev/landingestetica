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
import Head from "next/head";


export default function Home() {
    return (
        <section className="relative">
            <Head>
                <title>Precios</title>
                <meta name="description" content="Descubre los mejores tratamientos de uñas en nuestro centro de estética. Ofrecemos manicura, pedicura, uñas de gel y acrílicas, y más." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="centro de estética, tratamientos de uñas, manicura, pedicura, uñas de gel, uñas acrílicas, belleza, Madrid, cuidado personal, estética Madrid" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
