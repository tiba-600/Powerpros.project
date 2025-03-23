import Title_pagina from "@design/Title_pagina/Title_pagina";
import "./Solliciteren.css";
import Samenwerkingen from "@design/Samenwerkingen/Samenwerkingen";

const Solliciteren = () => {
  return (
    <>
      <Title_pagina>
        <div className="Title-container">
          <h2>Carrières & Samenwerkingen</h2>
          <p>
            Sluit je aan bij ons team van vakmensen en word onderdeel van een
            groeiend bedrijf dat zich inzet voor uitmuntendheid in elektrische
            en netwerkoplossingen.
          </p>
        </div>
      </Title_pagina>

      <Samenwerkingen/>
    </>
  );
};

export default Solliciteren;
