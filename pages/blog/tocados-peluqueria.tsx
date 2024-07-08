import BannerCita from "@/components/BannerCita";
import Footer from "@/components/Footer";
import CustomHeader from "@/components/CustomHeader";
import CustomBanner from "@/components/CustomBanner";



export default function BlogPage() {
    return (
        <section className="relative">
            <CustomHeader />
            <CustomBanner subtitle="CENTRO DE ESTETICA" title="La Elegancia de los Tocados" />
            <div className="container mx-auto ">
                <div className="mx-auto  p-8 rounded-lg py-20">
                    <h1 className="text-3xl font-bold mb-6 text-center color-main">La Elegancia de los Tocados: Transformando Peinados en Obras de Arte</h1>

                    <p className="text-lg mb-4">La peluquería es un arte que va más allá del simple corte y peinado del cabello. Uno de los aspectos más sofisticados y elegantes de esta disciplina es la creación y colocación de tocados. Estos accesorios no solo embellecen el peinado, sino que también pueden transformar completamente el look de una persona, dándole un aire de sofisticación y glamour. En este artículo, exploraremos la historia, los tipos, y cómo elegir y lucir un tocado para diferentes ocasiones.</p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4 color-main">La Historia de los Tocados</h2>

                    <p className="text-lg mb-4">Los tocados tienen una larga y rica historia que se remonta a las antiguas civilizaciones. En Egipto, Grecia y Roma, los tocados eran símbolos de estatus y poder, utilizados tanto por hombres como por mujeres. Durante la Edad Media y el Renacimiento, los tocados se convirtieron en elementos esenciales de la moda aristocrática. Con el tiempo, estos accesorios han evolucionado en diseño y propósito, pero su esencia de realzar la belleza y la elegancia ha permanecido intacta.</p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4 color-main">Tipos de Tocados</h2>

                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Diademas</strong>: Simples pero elegantes, las diademas son versátiles y pueden ser usadas tanto en eventos formales como informales. Pueden estar adornadas con cristales, perlas o flores.</li>
                        <li><strong>Tiaras</strong>: Asociadas con la realeza y los eventos formales, las tiaras añaden un toque de majestuosidad y glamour. Son perfectas para bodas y galas.</li>
                        <li><strong>Peinetas</strong>: Estas piezas se colocan en la parte posterior o lateral del peinado y pueden estar decoradas con detalles intrincados como encaje, flores artificiales o joyería.</li>
                        <li><strong>Coronas de Flores</strong>: Muy populares en bodas y eventos al aire libre, las coronas de flores aportan un aire fresco y natural. Pueden ser hechas con flores naturales o artificiales.</li>
                        <li><strong>Sombreros y Fascinators</strong>: Utilizados principalmente en eventos como carreras de caballos o bodas, estos tocados varían desde pequeños y sutiles hasta grandes y llamativos, y a menudo incorporan plumas, redes y otros adornos.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-4 color-main">Cómo Elegir el Tocado Perfecto</h2>

                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Considera el Peinado</strong>: El tipo de peinado que llevas influirá en el tipo de tocado que deberías elegir. Por ejemplo, un recogido alto puede lucir espectacular con una tiara, mientras que un peinado suelto y natural puede complementarse mejor con una corona de flores.</li>
                        <li><strong>Ten en Cuenta la Ocasión</strong>: Elige un tocado que sea apropiado para la ocasión. Una tiara o un fascinator puede ser perfecto para una boda formal, mientras que una diadema o una peineta puede ser más adecuada para un evento menos formal.</li>
                        <li><strong>Color y Estilo</strong>: Asegúrate de que el tocado complemente tu atuendo y no compita con él. Los colores y el estilo del tocado deben armonizar con tu vestido y accesorios.</li>
                        <li><strong>Comodidad</strong>: Es importante que te sientas cómoda con el tocado. Asegúrate de que esté bien asegurado y no cause molestias durante el evento.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-4 color-main">Cómo Lucir un Tocado con Estilo</h2>

                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Posicionamiento</strong>: Coloca el tocado en una posición que complemente tu peinado y rostro. Asegúrate de que esté bien asegurado para evitar que se desplace.</li>
                        <li><strong>Equilibrio</strong>: El tocado debe equilibrar tu look sin sobrecargarlo. Si el tocado es grande o llamativo, manten el resto de tu peinado y maquillaje más sencillos.</li>
                        <li><strong>Confianza</strong>: Lleva el tocado con confianza. La seguridad en ti misma es la clave para lucir cualquier accesorio con elegancia y estilo.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-4 color-main">Conclusión</h2>

                    <p className="text-lg mb-4">Los tocados son accesorios maravillosos que pueden transformar un peinado ordinario en una obra de arte. Ya sea para una boda, una gala o cualquier evento especial, elegir y lucir el tocado adecuado puede realzar tu belleza y añadir un toque de sofisticación a tu look. Con la combinación correcta de estilo, color y comodidad, los tocados pueden convertirse en una parte esencial de tu arsenal de moda.</p>
                </div>
            </div>
            <BannerCita />

            <Footer />
        </section>
    );
}
