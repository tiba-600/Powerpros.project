import { Form, NavLink } from "react-router";
import { useState } from "react";
import "./Offerte.css";
import Formulier from "@design/Offerte/Formulier/Formulier";
import Title_pagina from "@design/Title_pagina/Title_pagina";
import Offerte_voordelen from "@design/Offerte_voordelen/Offerte_voordelen";
import Bedankt from "@design/Bedankt/Bedankt";

const Offerte = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      <Title_pagina>
        <div className="Title-container">
          <h2>Offerte Aanvragen</h2>
          <p>
            Wilt u een vrijblijvende offerte voor wifi-installatie of elektriciteitswerken? 
            Vul het offerteformulier in en wij nemen zo snel mogelijk contact met u op.
          </p>
        </div>
      </Title_pagina>
      <Offerte_voordelen />

      {isSubmitted && (
        <Bedankt>
          <p className="bedankt-text">
            Bedankt voor uw offerteaanvraag! Ons team zal deze binnen 24 uur verwerken en per e-mail naar u toesturen.
          </p>
        </Bedankt>
      )}

      <Formulier onSubmit={handleFormSubmit} />
    </>
  );
};

export default Offerte;
