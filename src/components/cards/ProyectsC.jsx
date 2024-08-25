import capI from "../../assets/img/iconcapyizq.png"
import "../styles/components styles/proyectsC.css"

export const ProyectsC = ({ img, tittle }) => {
    return (
        <>
            <div className="cardp-cont">
                <img className="" src={capI} alt="no furulo we" />
                <img className="cardp-cont-pry" src={img} alt="no furulo we" />
                <span>{tittle}</span>
            </div>
        </>

    )
}