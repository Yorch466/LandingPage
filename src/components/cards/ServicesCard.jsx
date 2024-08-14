import "../styles/components styles/servicesCard.css"
import arrowSVG from "../../assets/svg/arrow.svg"

export const ServicesCard = ({ service }) => {
    return (
        <div className="svc-card">
            <a href="">
                <span>
                    {service}
                </span>
            </a>
            <img src={arrowSVG} alt="no furulo we" />
        </div>
    );
};
