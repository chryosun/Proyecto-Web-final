import Header from "../components/Header/Header";
import {Footer} from '../components/Footer/Footer';
import './galeria.css'
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto5 from "../assets/foto5.jpg";
import foto9 from "../assets/foto9.jpg";
import foto10 from "../assets/foto10.jpg";
import foto11 from "../assets/foto11.jpg";
import foto12 from "../assets/foto12.jpg";
import foto13 from "../assets/foto13.jpg";
import foto15 from "../assets/foto15.jpg";

export const Galeria = () => {

    return (
        <>
            <Header />

            <section className="galeria">
                <img src={foto1} alt="" />
                <img src={foto2} alt="" />
                <img src={foto5} alt="" />
                <img src={foto9} alt="" />
                <img src={foto10} alt="" />
                <img src={foto11} alt="" />
                <img src={foto12} alt="" />
                <img src={foto13} alt="" />
                <img src={foto15} alt="" />
            </section>
            <Footer />
        </>
    );
}