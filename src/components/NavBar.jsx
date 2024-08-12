import '../styles/components styles/NavBar.css'
import logo from '../assets/img/companyLogo.jpeg'
import { OptionCard } from './OptionCard'
import { Link } from 'react-router-dom'
export const NavBar = () => {

    return (
        <div className="nv-container">
            <Link to="/">
                <div className="ln-cont">
                    <img src={logo} alt="no furulo we" />
                    <span>CapySharksDevs SRL</span>
                </div>
            </Link>
            <div className="sp-cont">
                <a href="#proyects">
                    <OptionCard option="Proyectos" />
                </a>
                <a href="#clients">
                    <OptionCard option="Clientes" />
                </a>
                <a href="#tecnologies">
                    <OptionCard option="Tecnologia" />
                </a>
                <a href="#services">
                    <OptionCard option="Servicios" />
                </a>
                <Link to="/aboutus">
                    <OptionCard option="Sobre Nosotros" />
                </Link>
            </div>
            <div className="btn-nav">
                <button>Contactanos</button>
            </div>
        </div>
    )
}