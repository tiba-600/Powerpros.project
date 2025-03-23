import { NavLink } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import "./Back_btn.css"

const Back_btn = () => {
    return(
        <>
        <NavLink to ="/diensten" >
        <FiArrowLeft className="back" />
        </NavLink>
        </>
    )
}

export default Back_btn;