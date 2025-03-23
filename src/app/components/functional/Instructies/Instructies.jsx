import Title_pagina from "@design/Title_pagina/Title_pagina";
import Instructie from "@design/Instructie/Instructie";
import "./Instructies.css";

const Instructies = () => {
  return (
    <>
      <Title_pagina>
        <div className="Title-container">
          <h2>Instructies</h2>
          <p>
            Volg onze eenvoudige stappen voor een snelle en probleemloze
            installatie. Bekijk de handleidingen en tips om uw wifi-netwerk of
            elektrische installatie optimaal te laten werken.
          </p>
        </div>
      </Title_pagina>

      <Instructie/>
    </>
  );
};

export default Instructies;
