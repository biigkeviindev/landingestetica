import Image from "next/image";
import { Inter } from "next/font/google";
import MainBanner from "@/components/MainBanner";
import Services from "@/components/Services";
import About from "@/components/About";
import Prices from "@/components/Prices";
import Blog from "@/components/Blog";
import BannerCita from "@/components/BannerCita";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <div>
        <MainBanner></MainBanner>
      </div>
      <div className="container mx-auto">
        <Services />
        <About />
        <Prices />
        <Blog />
      </div>
      <BannerCita />
      <div className="container mx-auto">
        <Footer />
      </div>
    </section>
  );
}
