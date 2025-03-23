import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ isNavOpen, toggleNav }) => {
    const handleLinkClick = () => {
        toggleNav(); 
    };

    return (
        <>
            <div className={`navigation ${isNavOpen ? "active" : ""}`}>
                <ul>
                    <li>
                        <NavLink to="/overons" activeClassName="active" onClick={handleLinkClick}>
                            Over ons
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/instructies" activeClassName="active" onClick={handleLinkClick}>
                            Instructies
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq" activeClassName="active" onClick={handleLinkClick}>
                            FAQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active" onClick={handleLinkClick}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Nav;