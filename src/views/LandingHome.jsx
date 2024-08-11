import { NavBar } from "../components/NavBar"
import topC from "../assets/img/topCompany.png"
import toolK from "../assets/img/toolkits.jpg"
import bg from "../assets/img/msgA.jpg"
import "../styles/views styles/LandingHome.css"
import { ServicesCard } from "../components/ServicesCard"

export const LandingHome = () =>{
    return(
        <div className="ldh-container">
            <div className="nv-container">
                <NavBar/>
            </div>
            <div className="bd-cont">
                <div className="pst-cont">
                    <img src={bg} alt="no furulo we" />
                    <span className="sp1">
                        Empresa de <br/>
                        desarrollo de <br/>
                        Software.
                    </span>
                    <span className="sp2">
                        Deboramos <br />
                        a la competencia
                    </span>
                </div>
                <div className="msg-cont">
                    <p>Nuestros productos de software son el resultado directo del equipo y los procesos adecuados cultivados a lo largo de los años.</p>
                    <hr />
                    <img src={topC} alt="no furulo we" />
                </div>
                <div className="svc-cont">
                    <div className="">
                        <h2>Servicios que Ofrecemos</h2>
                    </div>
                    <hr />
                    <div className="">
                        <img src={toolK} alt="no furulo we" />
                    </div>
                    <div className="services-cont">
                        <ServicesCard service = "kk"/>
                    </div>
                </div>
            </div>
        </div>
    )
}