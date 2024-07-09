import Blog from "@/components/Blog";
import BannerCita from "@/components/BannerCita";
import Footer from "@/components/Footer";
import CustomHeader from "@/components/CustomHeader";
import CustomBanner from "@/components/CustomBanner";
import Head from "next/head";


export default function BlogPage() {
    return (
        <section className="relative">
            <Head>
                <title>Blog</title>
                <meta name="description" content="Descubre los mejores tratamientos de uñas en nuestro centro de estética. Ofrecemos manicura, pedicura, uñas de gel y acrílicas, y más." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="centro de estética, tratamientos de uñas, manicura, pedicura, uñas de gel, uñas acrílicas, belleza, Madrid, cuidado personal, estética Madrid" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
