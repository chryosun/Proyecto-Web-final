import Header from "../components/Header/Header";
import {Footer} from '../components/Footer/Footer';
import './programas.css';
import equipo from "../assets/equipo.jpg";
import foto2 from "../assets/foto2.jpg";
import foto5 from "../assets/foto5.jpg";


export const Programas = () => {
    return (
        <>
            <Header />
            <section className="programas">
                <div className="card-program">
                    <div className="img">
                        <img src={equipo} alt="" />
                    </div>
                    <div className="info-program">
                        <h3>Círculo de la Misericordia</h3>
                    </div>
                </div>
                <div className="card-program">
                    <div className="img">
                        <img src={foto2} alt="" />
                    </div>
                    <div className="info-program">
                        <h3>Grupo McAuley</h3>
                    </div>
                </div>
                <div className="card-program">
                    <div className="img">
                        <img src={foto5} alt="" />
                    </div>
                    <div className="info-program">
                        <h3>Asociados de la Misericordia</h3>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}