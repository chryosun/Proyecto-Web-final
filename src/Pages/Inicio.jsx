import Header from "../components/Header/Header";
import {Footer} from '../components/Footer/Footer';
import HeroPanel from '../components/Hero/HeroPanel';
// import './inicio.css';

export const Inicio = () => {
    return (
        <>
            <Header />
            <main>
                <HeroPanel />
            </main>
            < Footer />
        </>
    );
};