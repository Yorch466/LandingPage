import { IndustriesLogos } from "./cards/IndustriesLogos"
import "./styles/barrel styles/IndustrieLogosBarrel.css"

export const IndustriesLogosBarrel = () => {
    return (
        <div className="ind-logos"> 
            <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/customers/tui-color.svg" />
            <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/customers/asset-book-color.svg" />
            <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/cases/samsung/logo/samsung-color.svg" />
            <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/customers/media-markt-color.svg" />
            <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/customers/prea-gmbh-color.svg" />
            <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/customers/digital-inspire-color.svg" />
            <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/customers/mogo-finance-color.svg" />
            <IndustriesLogos industrie="https://static.andersenlab.com/andersenlab/new-andersensite/customers/mercedes-color.svg" />
        </div>
    )
}