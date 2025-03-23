import "./Contact_Info.css"
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { NavLink } from "react-router";


const Contact_Info = () => {
    return (
        <>
        <div className="info">
        <div className="info__title">
            <h2>Contact Info</h2>
        </div>
        <div className="info__list">
            <ul>
                <li className="info__btw">
                <FaFileInvoice className="info__icon" />
                <a href="https://www.companyweb.be/nl/0800219514/powerpros" target="_blank" rel="noopener noreferrer">
                Btw:BE 0800219514
                </a>
                </li>

                <li>
                <FaPhone className="info__icon" />
                +32 486 22 91 65  
                </li>

                <li>
                <FaEnvelope className="info__icon" /> 
                kadhumsajjad@gmail.com
                </li>

                <li>
                <FaMapMarkerAlt className="info__icon" /> 
                Tennisstraat11 Bus 101
                2660 Antwerpen
                </li>

                <li className="info__solliciteren">
                <FaBriefcase className="info__icon" />
                <NavLink to="solliciteren">
                Solliciteren
                </NavLink>
                
                </li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Contact_Info;