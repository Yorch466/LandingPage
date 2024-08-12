import "../styles/components styles/tecnologyCard.css"

export const TecnologyCard = ({image, tecnology}) => {
    return(
        <div className="tec-card">
            <img src={image} alt="no furulo we" />
            <span>{tecnology} <hr /></span>
        </div>
    )
}