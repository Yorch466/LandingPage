
import "../styles/components styles/proyectsC.css"

export const ProyectsC = ({img, desc}) => {
    return(
        <div className="cardp-cont">
            <img src={img} alt="no furulo we" />
            <p>{desc}</p>
        </div>
    )
}