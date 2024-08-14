
import "../components/styles/views styles/AboutUs.css"
import organigrama from "../assets/img/organigrama.jpg"
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"

export const AboutUs = () => {
    return (
        <>
            <NavBar />
            <section className="about">
                <h1>Sobre Nosotros</h1>
                <div className="msvs-cont">
                    <div className="ms-cont">
                        <h3>Mision</h3>
                        <p>Desarrollar soluciones de software innovadoras y personalizadas que impulsen el crecimiento y la eficiencia de nuestros clientes, combinando tecnología de vanguardia con un enfoque centrado en el usuario y un compromiso con la calidad</p>
                    </div>
                    <div className="vs-cont">
                        <h3>Vision</h3>
                        <p>Ser reconocidos como líderes en el desarrollo de software a nivel global, transformando ideas en soluciones tecnológicas impactantes y accesibles que mejoren la vida y los negocios de nuestros clientes en todo el mundo</p>
                    </div>
                </div>
                <p>En Capy Sharks Devs SRL, nuestro equipo está compuesto por profesionales apasionados y dedicados a ofrecer soluciones de software innovadoras. Nuestro organigrama refleja la estructura y colaboración que nos permite alcanzar nuestros objetivos y brindar el mejor servicio a nuestros clientes.</p>
                <div className="organizational-chart-container">
                    <img src={organigrama} alt="Organigrama" className="organizational-chart" />
                </div>
                <p>Estamos comprometidos con la excelencia y la innovación en cada proyecto. Conoce a nuestro equipo y descubre cómo trabajamos juntos para lograr resultados excepcionales.</p>
                
            </section>
            <Footer />
        </>
    )
}