import Header from "../components/Header/Header";
import './eventos.css';
import evento1 from "../assets/evento1.jpg";
import evento2 from "../assets/evento2.jpg";
import evento3 from "../assets/evento3.jpg";
import {Footer} from '../components/Footer/Footer';

export const Eventos = () => {

    return (
        <>
            <Header />
            <div className="card">
                <div className="imagen">
                    <img src={evento1} alt="" />
                </div>
                <div className="informacion">
                    <div className="informacion-1">
                        <h2>Celebración anual del día de la Misericordia</h2>
                        <p>Esta fecha se celebra realizando obras de misericordia corporales en 2022 salimos a repartir almuerzos y canastas con dulces para niños y personas que se encuentran pidiendo limosna en las calles de La Ceiba, y también a los familiares de enfermos en el Hospital General Atlántida.</p>
                    </div>
                    <div className="informacion-2">
                        <p className="title">Lugar</p>
                        <p>Orfanato</p>
                        <p className="title">Fecha y Hora</p>
                        <p>24 de septiembre - 10:00 am</p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="imagen">
                    <img src={evento2} alt="" />
                </div>
                <div className="informacion">
                    <div className="informacion-1">
                        <h2>Visita del Hogar Materno infantil</h2>
                        <p>En estas visitas nos encargamos de entregar donaciones para bebés recién nacidos, alimentos para la madre y familia que se encuentra en espera para poder salir del hospital.</p>
                    </div>
                    <div className="informacion-2">
                        <p className="title">Lugar</p>
                        <p>Hospital Atlántida</p>
                        <p className="title">Fecha y Hora</p>
                        <p>24 de septiembre - 9:30 am</p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="imagen">
                    <img src={evento3} alt="" />
                </div>
                <div className="informacion">
                    <div className="informacion-1">
                        <h2>Desayuno navideño</h2>
                        <p>Todos los años salimos a las calles de la ciudad en busca de personas sin hogar para hacer entrega de un desayuno completo, y ahí mismo si tenemos donaciones, les entregamos ropa y algunas otras donaciones que puedan servir.</p>
                    </div>
                    <div className="informacion-2">
                        <p className="title">Lugar</p>
                        <p>Calles de La Ceiba y Hospital Atlántida</p>
                        <p className="title">Fecha y Hora</p>
                        <p>22 de diciembre - 9:00 am</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}