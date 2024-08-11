import '../styles/components styles/NavBar.css'
import logo from '../assets/img/companyLogo.jpeg'
import { OptionCard } from './OptionCard'
export const NavBar = () => {
    
    return(
        <div className="nv-container">
            <div className="ln-cont">
                <img src={logo} alt="no furulo we" />
                <span>CapySharksDevs SRL</span>
            </div>
            <div className="sp-cont">
                <OptionCard option = "Proyectos" />
                <OptionCard option = "Testimonios" />
                <OptionCard option = "Tecnologia" />
                <OptionCard option = "Servicios" />
                <OptionCard option = "Sobre Nosotros" />
            </div>
            <div className="btn-nav">
                <button>Contactanos</button>
            </div>
        </div>
    )
}