import Header from '../components/Header/Header';
import './blog.css'
import evento1 from '../assets/evento1.jpg';
import evento2 from '../assets/evento2.jpg';
import evento3 from '../assets/evento3.jpg';
import {Footer} from '../components/Footer/Footer';

export const Blog = () => {

  return (
    <>
      <Header />
      <section className="blog">
        <div className="entradas">
          <a href="/entrada1">
            <div className="entrada">
              <img src={evento1} alt="" />
              <h2>Celebración de San Patricio</h2>
              <p>En el corazón de nuestra comunidad de la Misericordia, late una conexión especial con las verdes colinas de Irlanda...</p>
            </div>
          </a><a href="/entrada2">
            <div className="entrada">
              <img src={evento2} alt="" />
              <h2>El Día de la Misericordia de 2022</h2>
              <p>Con el espíritu misericordioso que nos caracteriza, nos lanzamos a las calles y al Hospital Atlántida para compartir un acto concreto de amor y compasión...</p>
            </div>
          </a>
          <a href="/entrada3">
            <div className="entrada">
              <img src={evento3} alt="" />
              <h2>Visita Especial al Orfanato</h2>
              <p>En un cálido día de sol, nuestra comunidad tuvo el privilegio de llevar alegría y cariño a un lugar lleno de esperanza...</p>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};
