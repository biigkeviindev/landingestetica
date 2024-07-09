import BannerCita from "@/components/BannerCita";
import Footer from "@/components/Footer";
import CustomHeader from "@/components/CustomHeader";
import CustomBanner from "@/components/CustomBanner";



export default function BlogPage() {
    return (
        <section className="relative">
            <CustomHeader />
            <CustomBanner subtitle="CENTRO DE ESTETICA" title="Centros de Estética y Tratamientos de Uñas" />
            <div className="container mx-auto ">
                <div className="mx-auto  p-8 rounded-lg py-20">
                    <header className="bg-blue-500 text-white p-4 mb-6 shadow-md">
                        <h1 className="text-3xl font-bold text-center ">Centros de Estética y Tratamientos de Uñas</h1>
                    </header>
                    <section>
                        <p className="mb-4">
                            Los centros de estética ofrecen una amplia variedad de tratamientos para mejorar la apariencia y el bienestar de las personas. Entre estos, los tratamientos de uñas se han vuelto muy populares debido a la creciente demanda de técnicas innovadoras y estilos personalizados.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Servicios de Tratamientos de Uñas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold mb-2">Manicura</h3>
                                <p>
                                    La manicura es uno de los servicios más básicos y populares en los centros de estética. Incluye el recorte, limado y pulido de las uñas, así como el cuidado de las cutículas. Algunos paquetes también incluyen masajes de manos y aplicaciones de esmalte.
                                </p>
                            </div>
                            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold mb-2">Pedicura</h3>
                                <p>
                                    La pedicura se enfoca en el cuidado de los pies y las uñas de los pies. Al igual que la manicura, incluye el recorte, limado y pulido de las uñas, además de la eliminación de callosidades y la aplicación de cremas hidratantes.
                                </p>
                            </div>
                            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold mb-2">Uñas de Gel</h3>
                                <p>
                                    Las uñas de gel son una opción popular para quienes desean unas uñas duraderas y de aspecto natural. Este tratamiento implica la aplicación de gel sobre la uña natural, que luego se cura bajo una lámpara UV o LED.
                                </p>
                            </div>
                            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold mb-2">Uñas Acrílicas</h3>
                                <p>
                                    Las uñas acrílicas son perfectas para quienes desean alargar sus uñas naturales. Este proceso combina un monómero líquido y un polímero en polvo para crear una capa dura que se moldea sobre la uña natural o una extensión.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Tendencias Actuales</h2>
                        <p className="mb-4">
                            En el mundo de los tratamientos de uñas, las tendencias cambian constantemente. Algunas de las tendencias más actuales incluyen el uso de esmaltes en gel, el nail art personalizado, las uñas mate y los acabados metálicos. Además, el cuidado y la salud de las uñas se han vuelto una prioridad, con muchos centros de estética ofreciendo tratamientos fortalecedores y nutritivos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Conclusión</h2>
                        <p>
                            Los centros de estética y los tratamientos de uñas ofrecen una gran variedad de servicios para todos los gustos y necesidades. Desde una simple manicura hasta uñas acrílicas complejas, estos centros se dedican a proporcionar resultados de alta calidad y experiencias de relajación para sus clientes.
                        </p>
                    </section>
                </div>
            </div>
            <BannerCita />

            <Footer />
        </section>
    );
}
