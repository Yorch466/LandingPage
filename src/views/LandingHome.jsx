import { useState } from "react";
import { NavBar } from "../components/NavBar";
import topC from "../assets/img/topCompany.png";
import toolK from "../assets/img/toolkits.jpg";
import bg from "../assets/img/msgA.jpg";
import ios from "../assets/svg/ios.svg";
import android from "../assets/svg/android.svg";
import angular from "../assets/svg/angular.svg";
import flutter from "../assets/svg/flutter.svg";
import net from "../assets/svg/NET.svg";
import php from "../assets/svg/php.svg";
import python from "../assets/svg/python.svg";
import react from "../assets/svg/react.svg";
import "../components/styles/views styles/LandingHome.css";
import { ServicesCard } from "../components/ServicesCard";
import { IndustriesLogos } from "../components/IndustriesLogos";
import { TecnologyCard } from "../components/cards/TecnologyCard";
import { ProyectsCard } from "../components/ProyectsCard";
import { Footer } from "../components/Footer";

export const LandingHome = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const tecData = [
        { image: ios, tecnology: "iOS" },
        { image: android, tecnology: "Android" },
        { image: angular, tecnology: "Angular" },
        { image: react, tecnology: "React" },
        { image: flutter, tecnology: "Flutter" },
        { image: php, tecnology: "PHP" },
        { image: python, tecnology: "Python" },
        { image: net, tecnology: ".NET" },
    ];

    const next = () => {
        if (currentIndex < tecData.length - itemsPerPage) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div className="ldh-container">
            <div className="nv-container">
                <NavBar />
            </div>
            <div className="bd-cont">
                <div className="pst-cont">
                    <img src={bg} alt="no furulo we" />
                    <span className="sp1">
                        Empresa de <br />
                        desarrollo de <br />
                        Software.
                    </span>
                    <span className="sp2">
                        Devoramos <br />
                        a la competencia
                    </span>
                </div>
                <div className="msg-cont">
                    <p>
                        Nuestros productos de software son el resultado directo
                        del equipo y los procesos adecuados cultivados a lo largo
                        de los años.
                    </p>
                    <hr />
                    <img src={topC} alt="no furulo we" />
                </div>
                <div id="services" className="svc-cont">
                    <h1>Servicios que Ofrecemos</h1>
                    <hr />
                    <div className="svc-content">
                        <img className="svc-img" src={toolK} alt="no furulo we" />
                        <div className="services-cont">
                            <ServicesCard service="Desarrollo Móvil" />
                            <ServicesCard service="Desarrollo Web" />
                            <ServicesCard service="Desarrollo de Software a medida" />
                            <ServicesCard service="Desarrollo multiplataforma" />
                            <ServicesCard service="Desarrollo en la nube" />
                            <ServicesCard service="Desarrollo IoT" />
                            <ServicesCard service="Creación y Gestión de Bases de Datos" />
                            <ServicesCard service="Desarrollo PWA" />
                            <ServicesCard service="Integración API" />
                            <ServicesCard service="Modernización de sistemas heredados" />
                        </div>
                    </div>
                </div>
                <div id="clients" className="ind-cont">
                    <h1>Empresas con las que estamos orgullosos de haber trabajado</h1>
                    <div className="ind-logos">
                        <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/customers/tui-color.svg" />
                        <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/customers/asset-book-color.svg" />
                        <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/cases/samsung/logo/samsung-color.svg" />
                        <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/customers/media-markt-color.svg" />
                        <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/customers/prea-gmbh-color.svg" />
                        <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/customers/digital-inspire-color.svg" />
                        <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/customers/mogo-finance-color.svg" />
                        <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/customers/mercedes-color.svg" />
                    </div>
                </div>
                <div id="tecnologies" className="tec-cont">
                    <div className="tec-info">
                        <h2>Set de Tecnologias</h2>
                        <p>
                            Colabore con expertos informáticos competentes y
                            expertos en ingeniería de software web y móvil. Como
                            socio tecnológico y empresarial de confianza, aplicamos
                            las tecnologías, los marcos de trabajo y los componentes
                            más avanzados para crear software que destaca por su
                            back-end sólido y eficaz con una interfaz de usuario y
                            una interfaz de usuario intuitivas.
                        </p>
                    </div>
                    <div className="carousel-container">
                        <button onClick={prev} className="carousel-btn prev">
                            {"<"}
                        </button>
                        <div className="tecs">
                            {tecData
                                .slice(currentIndex, currentIndex + itemsPerPage)
                                .map((tec, index) => (
                                    <TecnologyCard
                                        key={index}
                                        image={tec.image}
                                        tecnology={tec.tecnology}
                                    />
                                ))}
                        </div>
                        <button onClick={next} className="carousel-btn next">
                            {">"}
                        </button>
                    </div>
                </div>
                <div id="proyects" className="pry-cont">
                    <h2>Proyectos que realizamos</h2>
                    <div className="pry-info">
                        <ProyectsCard/>
                    </div>
                </div>
                <div className="ft-cont">
                    <Footer/>
                </div>
            </div>
        </div>
    );
};
