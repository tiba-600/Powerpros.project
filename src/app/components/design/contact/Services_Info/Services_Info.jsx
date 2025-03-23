import { NavLink } from "react-router"
import "./Services_Info.css"

const Services_Info = () => {
    return (
        <>
        <div className="services">
            <div className="services__title">
                <h2>Services</h2>
            </div>
            <div className="services__list">
                <ul>
                    <li>
                        <NavLink to="offerte">
                            <p>Offerte Aanvragen</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="contact">
                            <p>Serviceaanvraag</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="instructies">
                            <p>Hulp & Instructies</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Services_Info 