
import kevin from "../assets/img/kevin.jpeg"
import ali from "../assets/img/ali.jpeg"
import choque from "../assets/img/choque.jpeg"
import fox from "../assets/img/fox.jpeg"
import building from "../assets/img/building.jpg"
import yorch from "../assets/img/yorch.png"
import { ProyectsC } from "./cards/ProyectsC"
import "./styles/barrel styles/ProyectsCardBarrel.css"


const data = {
    kevin: "Aplicación web dedicada a las tarjetas didácticas personalizadas. Esta iniciativa se erige como un esfuerzo por proporcionar a los usuarios una herramienta integral y eficaz para el estudio y repaso de conceptos esenciales.",
    ali: "Aplicación Web de un sistema de gestión de Veterinaria, utilizando un chatbot para consultas médicas y un registro mediante Qr",
    choque: "Sistema web de prediagnóstico para enfermedades respiratorias que tiene como objetivo brindar a los usuarios una herramienta accesible para identificar posibles afecciones respiratorias.",
    fox: "Aplicación móvil para pacientes de un servicio médico que permite agendar citas, registra la información de las mismas y los detalles del tratamiento, y envía notificaciones para asegurar que los pacientes no pierdan sus citas y sigan el tratamiento correctamente.",
    building: "Plataforma Web para centralizar los proveedores de eventos y conectarlos con posibles compradores",
    yorch: "Aplicación móvil para la recomendación y generación de dietas aplicando Inteligencia Artificial generativa e interpretativa.",
}

export const ProyectsCard = () => {
    return (
        <div className="proyects-container">
            <ProyectsC img={kevin} desc={data.kevin} />
            <ProyectsC img={ali} desc={data.ali} />
            <ProyectsC img={choque} desc={data.choque} />
            <ProyectsC img={fox} desc={data.fox} />
            <ProyectsC img={building} desc={data.building} />
            <ProyectsC img={yorch} desc={data.yorch} />
        </div>
    )
}