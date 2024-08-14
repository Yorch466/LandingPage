import '../styles/components styles/optionCard.css'
/**
 * Option and link are string params for reutilizate this element
 * @param {String} String
 * @returns 
 */
export const OptionCard = ({ option}) => {
    return (
        <>
            <span className="services">
                {option}
            </span>
        </>
    )
}