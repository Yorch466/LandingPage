
import "./styles/components styles/Footer.css"
import insta from "../assets/svg/instagram.svg"

export const Footer = () => {
    return (
        <footer className="ft-container">
            <nav>
                <h6 className="footer-title">Servicios</h6>
                <a className="link link-hover">Desarrollo Móvil</a>
                <a className="link link-hover">Desarrolo Web</a>
                <a className="link link-hover">Desarrollo IoT</a>
                <a className="link link-hover">Desarrollo Multiplataforma</a>
            </nav>
            <nav>
                <h6 className="footer-title">Compañia</h6>
                <a className="link link-hover">Correo: capysharks@gmail.com </a>
                <a className="link link-hover">Contáctanos: +591 79792624 </a>
                <a className="link link-hover">Dirección: Calle Bustillos #387</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.instagram.com/george_ll46/" target="_blank">
                        { <img src={insta} alt="no furulo we" /* TODO: Fix inline Style of all this style={{backgroundColor:#BDC3C7}}*//>}
                    </a>
                    <a href="https://www.youtube.com/@ponchoperez1787" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/jorge.antonio.33886/" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </div>
            </nav>
        </footer>
    )
}