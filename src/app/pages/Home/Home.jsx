import { NavLink } from "react-router-dom";
import "./Home.css";
import Diensten from "@functional/Diensten/Diensten";
import Home_Title from "@design/Home_Section/Home_Title/Home_title";
import Expert from "@design/Expert/Expert";
import Consultatie from "@design/Consultatie/Consultatie";
import Consultatie_btn from "@design/Consultatie/Consultatie_btn/Consultatie_btn";

const Home = () => {
  return (
    <>
      <Home_Title />
      <Diensten />
      <Expert />
      <div className="consultatie-container">
        <Consultatie>
          <p className="consultatie__title">
            Op zoek naar professionele elektrische of netwerkservices? Neem
            vandaag nog contact met ons op voor een{" "}
            <span>gratis consultatie</span>.
          </p>

          <Consultatie_btn>
            <NavLink to="/contact">
            <button>Gratis Consultatie</button>
            </NavLink>
          </Consultatie_btn>
        </Consultatie>
      </div>
    </>
  );
};

export default Home;
