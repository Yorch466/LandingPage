
import kevin from "../assets/img/kevin.jpeg"
import ali from "../assets/img/ali.jpeg"
import choque from "../assets/img/choque.jpeg"
import fox from "../assets/img/fox.jpeg"
import building from "../assets/img/building.jpg"
import yorch from "../assets/img/yorch.png"
import { ProyectsC } from "./cards/ProyectsC"
import "./styles/barrel styles/ProyectsCardBarrel.css"


const data = {
    kevin: "APLICACION DE ESTUDIO DIDADCTICO MIND CARDS",
    ali: "SISTEMA DE GESTION VETERINARIA", 
    choque: "SISTEMA DE PREDIAGNOSTICOS DIAGNOSTIC JVP",
    fox: "SISTEMA DE GESTION MEDICA RESERVAS MED",
    building: "APLICACION DIGITAL PARA EVENTOS SOCIALES CHALITA OE",
    yorch: "SISTEMA DE GENERACION Y RECOMENDACION DE RUTINAS JAYANI POWER",
}

export const ProyectsCard = () => {
    return (
        <div className="proyects-container">
            <ProyectsC img={kevin} tittle={data.kevin} />
            <ProyectsC img={ali} tittle={data.ali} />
            <ProyectsC img={choque} tittle={data.choque} />
            <ProyectsC img={fox} tittle={data.fox} />
            <ProyectsC img={building} tittle={data.building} />
            <ProyectsC img={yorch} tittle={data.yorch} />
        </div>
    )
}