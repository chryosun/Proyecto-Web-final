import Header from "../components/Header/Header";
import './about.css';
import equipoImage from '../assets/equipo.jpg';
import {Footer} from '../components/Footer/Footer';


export const About = () => {

    return (
        <>
            <Header />

            <section className="nosotros">
                <div className="quienes-somos">
                    <div className="img">
                        <img src={equipoImage} alt="" />
                    </div>
                    <div className="informacion-nosotros">
                        <h2>¿Quienes Somos?</h2>
                        <p>Somos Asociadas y Asociados de la Misericordia, mujeres y varones, que respondemos a la invitación del Evangelio de Jesús, y al ejemplo de Catalina McAuley, de servir a los hijos e hijas de Dios empobrecidos, enfermos o carentes de una educación, mediante las obras de Misericordia corporales y espirituales. Incorporamos estos valores en nuestra vida diaria y compartimos la misión única de la Misericordia en nuestros hogares, lugares de trabajo, iglesias y comunidades. Si bien tenemos una conexión con las Hermanas de la Misericordia, venimos de muchas tradiciones religiosas diferentes, pero respetamos y estamos a gusto con el simbolismo cristiano y la oración. <br/> Participamos activamente en la vida de las Hermanas de la Misericordia y compartimos el carisma del Instituto. No hacemos votos (pobreza, castidad, obediencia y servicio) como lo hacen las Hermanas de la Misericordia. En cambio, hacemos un pacto (compromiso) para ser asociadas/os de las Hermanas de la Misericordia y compartir su vida espiritual y su compromiso de servicio a los demás y al mundo. Trabajamos para extender la presencia de la Misericordia a nuestras hermanas y hermanos a través de la oración, la solidaridad y proyectos de voluntariado. <br/> Somos más de 3.000 asociadas y asociados en los Estados Unidos, Latinoamérica, el Caribe, Guam y las Filipinas. El proceso de asociación generalmente dura alrededor de un año; ocasionalmente nos reunimos con otras Asociadas/os y Hermanas de la Misericordia para orar, momentos de fraternidad, de apoyo, para aprender sobre la Asociación de la Misericordia y discernir si es lo adecuado para cada persona. Después de este período de mutuo discernimiento, una ceremonia de alianza marca el compromiso formal con la familia de la Misericordia.</p>
                    </div>
                </div>
                <div className="mision-vision">
                    <div className="mision">
                        <h2>Misión</h2>
                        <p>Nuestra misión como Asociados de la Misericordia es responder a la llamada del Evangelio y seguir el ejemplo de Catalina McAuley, comprometiéndonos a servir a los hijos e hijas de Dios empobrecidos, enfermos o carentes de educación.  Dedicamos nuestras vidas a las obras de Misericordia corporales y espirituales, incorporando estos valores en cada aspecto de nuestra existencia diaria. Colaboramos activamente con las Hermanas de la Misericordia y compartimos su carisma, trabajando para extender la presencia de la Misericordia a través de la oración, la solidaridad y proyectos de voluntariado. Nos comprometemos a vivir una vida espiritual enriquecedora y a contribuir al servicio a los demás y al mundo.</p>
                    </div>
                    <div className="vision">
                        <h2>Visión</h2>
                        <p>En nuestra visión, nos imaginamos como una comunidad diversa y vibrante de Asociados de la Misericordia, unidos en el amor y el servicio. Visualizamos un mundo donde la compasión y la empatía son los pilares fundamentales de todas las interacciones humanas. Como Asociados, aspiramos a ser agentes de cambio, contribuyendo a la construcción de una sociedad más justa y equitativa. Vemos a nuestra comunidad creciendo en número y en profundidad espiritual, extendiendo la red de la Misericordia a nuevas regiones y tocando más vidas con compasión y amor. </p>
                    </div>
                </div>
                <div className="valores">
                    <h2>Valores</h2>
                    <div className="container-valor">
                        <div className="valor border">
                        <h3>Misericordia</h3>
                        <p>Nos comprometemos a mostrar compasión y empatía en todo lo que hacemos. Tratamos a cada persona con amabilidad y consideración.</p>
                        </div>
                        <div className="valor border">
                            <h3>Respeto</h3>
                            <p>Valoramos la diversidad y respetamos las opiniones y perspectivas de cada individuo. Fomentamos un ambiente inclusivo donde todos se sientan valorados.</p>
                        </div>
                        <div className="valor">
                            <h3>Justicia</h3>
                            <p>Nos esforzamos por la equidad y la justicia en todas nuestras acciones. Buscamos contribuir a un mundo más justo y equitativo.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}