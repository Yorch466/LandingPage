import skI from "../assets/img/sharkIcon.png";
import bg from "../assets/img/bg_landing.png";
import caplef from "../assets/img/iconcapyizq.png";
import caprig from "../assets/img/iconcapyder.png";
import cpI from "../assets/img/capyIcon.png";
import { NavBar } from "../components/NavBar";
import { ProyectsCard } from "../components/ProyectsCard";
import { Footer } from "../components/Footer";
import { IndustriesLogosBarrel } from "../components/IndustriesLogosBarrel";
import { TecnologyBarrel } from "../components/TecnologyBarrel";
import "../components/styles/views styles/LandingHome.css";
import { ServicesCardBarrel } from "../components/ServicesCardBarrel";

export const LandingHome = () => {

    const paragraphs = {
        messageIntro: `Nuestros productos de software son el resultado
                        directo
                        del equipo y los procesos adecuados cultivados a lo largo
                        de los años.`,
        messageTecno: `Colabore con expertos en informática y software web y móvil. Aplicamos las tecnologías más avanzadas para ofrecer un software con un back-end sólido y una interfaz intuitiva.`,
        messageService: `Navega con confianza. Nuestros servicios están diseñados para adaptarse a cualquier situación y superar las expectativas.`,
        messageClients: `Nos sentimos honrados de haber trabajado junto a estas empresas, con la serenidad y dedicación que nos caracteriza.`,
    }

    return (
        <div className="ldh-container">
            <div className="nav-container">
                <NavBar />
            </div>
            <div className="bd-cont">
                <div className="pst-cont">
                    <img src={bg} alt="no furulo we" />
                    <div className="sp1">
                        <span >
                            EMPRESA DE DESARROLLO <br />
                            DE SOFTWARE <br />
                        </span>
                        <p>{paragraphs.messageIntro}</p>
                    </div>
                </div>
                <div className="msg-cont">
                    <img src={caplef} alt="no furulo we" />
                    <p>
                        DEVORAMOS A LA COMPETENCIA
                    </p>
                    <img src={caprig} alt="no furulo we" />
                </div>
                <div id="services" className="svc-cont">
                    <div className="svc-title">
                        <h1>Servicios que Ofrecemos</h1>
                        <p>{paragraphs.messageService}</p>
                    </div>
                    <div className="svc-content">
                        <ServicesCardBarrel />
                        <img className="svc-img" src={skI} alt="no furulo we" />
                    </div>
                </div>
                <hr className="lines" />
                <div id="clients" className="ind-cont">
                    <div className="cp-cont">
                        <img className="" src={cpI} alt="no furulo we" />
                    </div>
                    <div className="ind-cont-sub">
                        <h1>NUESTROS SOCIOS ORGULLOSOS </h1>
                        <p>{paragraphs.messageClients}</p>
                        <IndustriesLogosBarrel />
                    </div>
                </div>
                <hr className="lines" />
                <div id="tecnologies" className="tec-cont">
                    <div className="tec-info">
                        <h2>Set de Tecnologias</h2>
                        <p>
                            {paragraphs.messageTecno}
                        </p>
                    </div>
                    <TecnologyBarrel />
                </div>
                <hr className="lines" />
                <div id="proyects" className="pry-cont">
                    <h2>Proyectos que realizamos</h2>
                    <div className="pry-info">
                        <ProyectsCard />
                    </div>
                </div>
                <div className="ft-cont">
                    <Footer />
                </div>
            </div>
        </div>
    );
};
