
import BannerCita from "@/components/BannerCita";
import Footer from "@/components/Footer";
import CustomHeader from "@/components/CustomHeader";
import CustomBanner from "@/components/CustomBanner";
import CustomGallery from "@/components/CustomGallery";


export default function Home() {
    return (
        <section className="relative">
            <CustomHeader />
            <CustomBanner subtitle="CENTRO DE ESTETICA" title="NUESTRO DÍA A DÍA" />
            <div className="container mx-auto ">
                <CustomGallery />
            </div>
            <BannerCita />

            <Footer />
        </section>
    );
}
