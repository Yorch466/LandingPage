// import "./styles/components styles/proyectsC.css"
import "./styles/barrel styles/ServicesCardBarrel.css"
import { ServicesCard } from "./cards/ServicesCard"

export const ServicesCardBarrel = () => {
    return (
        <div className="services-cont">
            <ServicesCard service="Desarrollo Móvil" />
            <ServicesCard service="Desarrollo Web" />
            <ServicesCard service="Desarrollo de Software a medida" />
            <ServicesCard service="Desarrollo multiplataforma " />
            <ServicesCard service="Desarrollo en la nube" />
            <ServicesCard service="Desarrollo IoT" />
            <ServicesCard service="Creación y Gestión de Bases de Datos" />
            <ServicesCard service="Desarrollo PWA" />
            <ServicesCard service="Integración API" />
            <ServicesCard service="Modernización de sistemas heredados" />
        </div>
    )
}