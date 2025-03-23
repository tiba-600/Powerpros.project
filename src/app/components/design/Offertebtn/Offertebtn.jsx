import "./Offertebtn.css";
import { NavLink } from "react-router";


const Offertebtn = () => {
    return(
        <>
        <div>
        <NavLink to="offerte">
           <button className="offertebtn">Offerte Aanvragen</button>
        </NavLink>
        </div>
        </>
    );
};

export default Offertebtn