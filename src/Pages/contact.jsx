import Header from "../components/Header/Header";
import equipo from "../assets/equipo.jpg";
import './contact.css';
import {Footer} from '../components/Footer/Footer';

export const Contacto = () => {

    return (
        <>
            <Header />

            <section className="contacto">
                <h1>Mandanos un Mensaje</h1>
                <div className="contact-form">
                    <div className="image">
                        <img src={equipo} alt="" />
                    </div>
                    <div className="form">
                        <form action="">
                            <div className="input-box"><input type="text" placeholder="nombre" /></div>
                            <div className="input-box"><input type="text" placeholder="correo electronico" /></div>
                            <div className="input-box"><input type="text" placeholder="telefono" /></div>
                            <div className="input-box"><input type="text" placeholder="asunto" /></div>
                            <div className="input-box"><textarea placeholder="Mensaje"></textarea></div>
                            <div className="input-box"><button>Enviar</button></div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}