import { NavLink } from "react-router";
import "./Header_logo.css"

const Header_logo = () => {
    return (
        <>
        <div>
            <NavLink to="/">
              <img src="/public/logo.png" alt="Logo" className="logo-image"  />
            </NavLink>
        </div>
        </>
    )
}

export default Header_logo;