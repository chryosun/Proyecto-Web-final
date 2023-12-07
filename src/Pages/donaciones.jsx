import Header from "../components/Header/Header";
import './donacion.css';
import {Footer} from '../components/Footer/Footer';


export const Donacion = () => {

    return (
        <>
            <Header />

            <section className="donacion">
                <h2>Donaciones</h2>
                <div className="donaciontipo">
                    <div className="donacionbox">
                        <h3>Transferencia a nuestra cuenta bancaria</h3>
                        <h4>BAC,Banpais,Ficohsa</h4>
                    </div>
                    <div className="donacionbox">
                        <h3>Ropa y Juguetes</h3>
                    </div>
                    <div className="donacionbox">
                        <h3>Granos básicos</h3>
                    </div>
                </div>
                <a href="https://www.paypal.com/hn/home" className="boton">Transferencia por Paypal</a>
            </section>
            <Footer />
        </>
    );
}