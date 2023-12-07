import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Galeria } from './Pages/Galeria';
import { Blog } from './Pages/Blog';
import { Eventos } from './Pages/Eventos';
import { FAQ } from './Pages/faq';
import { Programas } from './Pages/programas';
import { About } from './Pages/about';
import { Inicio } from './Pages/Inicio';
import { Ayuda } from './Pages/como-ayudar';
import { Donacion } from './Pages/donaciones';
import { Contacto } from './Pages/contact';
import { Entrada1 } from './components/Blog/clean-code';
import { Entrada2 } from './components/Blog/entrada2';
import { Entrada3 } from './components/Blog/entrada3';
import './App.css';

const App = () => {
  const routes = []
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Proyecto-Web-final'}>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca-de-nosotros" element={<About />} />
        <Route path="/como-ayudar" element={<Ayuda />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/eventos" element={<Eventos />}></Route>
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contactenos" element={<Contacto />} />
        <Route path="/nuestros-programas" element={<Programas />} />
        <Route path="/donaciones" element={<Donacion />} />
        <Route path="/entrada1" element={<Entrada1 />} />
        <Route path="/entrada2" element={<Entrada2 />} />
        <Route path="/entrada3" element={<Entrada3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
