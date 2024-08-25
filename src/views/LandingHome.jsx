import topC from "../assets/img/topCompany.png";
import toolK from "../assets/img/toolkits.jpg";
import bg from "../assets/img/bg_landing.png";
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
        messageTecno: `Colabore con expertos informáticos competentes y
                            expertos en ingeniería de software web y móvil. Como
                            socio tecnológico y empresarial de confianza, aplicamos
                            las tecnologías, los marcos de trabajo y los componentes
                            más avanzados para crear software que destaca por su
                            back-end sólido y eficaz con una interfaz de usuario y
                            una interfaz de usuario intuitivas.`,
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
                {/* <div className="msg-cont">
                    <p>
                        {paragraphs.messageIntro}
                    </p>
                    <hr />
                    <img src={topC} alt="no furulo we" />
                </div> */}
                <div id="services" className="svc-cont">
                    <h1>Servicios que Ofrecemos</h1>
                    <hr />
                    <div className="svc-content">
                        <img className="svc-img" src={toolK} alt="no furulo we" />
                        <ServicesCardBarrel />
                    </div>
                </div>
                <div id="clients" className="ind-cont">
                    <h1>Empresas con las que estamos orgullosos de haber trabajado</h1>
                    <IndustriesLogosBarrel />
                </div>
                <div id="tecnologies" className="tec-cont">
                    <div className="tec-info">
                        <h2>Set de Tecnologias</h2>
                        <p>
                            {paragraphs.messageTecno}
                        </p>
                    </div>
                    <TecnologyBarrel />
                </div>
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
