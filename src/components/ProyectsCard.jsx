
import kevin from "../assets/img/kevin.jpeg"
import ali from "../assets/img/ali.jpeg"
import choque from "../assets/img/choque.jpeg"
import fox from "../assets/img/fox.jpeg"
import building from "../assets/img/building.jpg"
import yorch from "../assets/img/yorch.png"
import { ProyectsC } from "./cards/ProyectsC"
import "./styles/barrel styles/ProyectsCardBarrel.css"
import { useState } from "react"

const data = {
    kevin: "APLICACION DE ESTUDIO DIDADCTICO MIND CARDS",
    ali: "SISTEMA DE GESTION VETERINARIA", 
    choque: "SISTEMA DE PREDIAGNOSTICOS DIAGNOSTIC JVP",
    fox: "SISTEMA DE GESTION MEDICA RESERVAS MED",
    building: "APLICACION DIGITAL PARA EVENTOS SOCIALES CHALITA OE",
    yorch: "SISTEMA DE GENERACION Y RECOMENDACION DE RUTINAS JAYANI POWER",
}

export const ProyectsCard = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    
    const proyData = [
        { img: kevin, tittle: data.kevin},
        { img: ali, tittle: data.ali},
        { img: choque, tittle: data.choque},
        { img: fox, tittle: data.fox},
        { img: building, tittle: data.building},
        { img: yorch, tittle: data.yorch},
    ]

    const next = () => {
        if(currentIndex < proyData.length - itemsPerPage){
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const prev = () => {
        if(currentIndex > 0 ){
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div className="carousel-container">
            <button onClick={prev} className="carousel-btn prev">
                {"<"}
            </button>
            <div className="proys">
                {
                    proyData
                    .slice(currentIndex, currentIndex + itemsPerPage)
                    .map((proy, index) => (
                        <ProyectsC
                            key={index}
                            img={proy.img}
                            tittle={proy.tittle}
                        />
                    ))
                }
            </div>
            <button onClick={next} className="carousel-btn next">
                {">"}
            </button>
            {/* <ProyectsC img={kevin} tittle={data.kevin} />
            <ProyectsC img={ali} tittle={data.ali} />
            <ProyectsC img={choque} tittle={data.choque} />
            <ProyectsC img={fox} tittle={data.fox} />
            <ProyectsC img={building} tittle={data.building} />
            <ProyectsC img={yorch} tittle={data.yorch} /> */}
        </div>
    )
}