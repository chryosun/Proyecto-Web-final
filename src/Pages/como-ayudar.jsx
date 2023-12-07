import Header from "../components/Header/Header";
import circulo from '../assets/circulo.jpg';
import redes from '../assets/redes.jpg';
import rezando from '../assets/rezando.jpg';
import viveres from '../assets/viveres.jpg';
import fb from '../assets/facebook.png';
import ig from '../assets/instagram.png';
import {Footer} from '../components/Footer/Footer';
import "./ayuda.css";

export const Ayuda = () => {

    return (
        <>
            <Header />

            <section className="ayuda-section">
                <h2>¿Cómo Ayudar?</h2>
                <p>¡Gracias por considerar apoyar nuestra causa! Aquí hay algunas formas en las que puedes ayudar:</p>
                <div className="ayuda-container">
                    <div className="row">
                        <div className="ayuda">
                            <img src={circulo} alt="" />
                            <h3>Únete a nuestro circulo</h3>
                            <p>Descubre cómo puedes formar parte de nuestro círculo y contribuir activamente.</p>
                        </div>
                        <div className="ayuda">
                            <img src={viveres} alt="" />
                            <h3>Donar Víveres</h3>
                            <p>Aporta donaciones de alimentos y artículos esenciales para ayudar a quienes más lo necesitan.</p>
                        </div>
                    </div>  
                    <div className="row">
                        <div className="ayuda">
                            <img src={rezando} alt="" />
                            <h3>Ayuda Rezando</h3>
                            <p>Únete en oración por el Ministerio Mundial de las Hermanas de la Misericordia y por nuestras actividades benéficas.</p>
                        </div>
                        <div className="ayuda">
                            <img src={redes} alt="" />
                            <h3>Ayuda Compartiendo</h3>
                            <p>Comparte nuestra labor en redes sociales y ayuda a difundir nuestro mensaje.</p>
                            <a href="https://www.facebook.com/circleofmercylcb">
                                <img src={fb} alt="" className="redes"/>
                            </a>
                            <a href="https://instagram.com/circleofmercy?igshid=MmVlMjlkMTBhMg==" >
                                <img src={ig} alt="" className="redes"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}