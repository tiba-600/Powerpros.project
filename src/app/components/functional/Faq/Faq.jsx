import Title_pagina from "@design/Title_pagina/Title_pagina";
import Question from "@design/Question/Question";


const Faq = () => {
  return (
    <>
      <Title_pagina>
        <div className="Title-container">
          <h2>Veelgestelde Vragen</h2>
          <p>
          Hier vindt u antwoorden op de meest gestelde vragen over onze diensten, wifi-installaties en elektriciteitswerken. Staat uw vraag er niet bij? Neem gerust contact met ons op! 
          </p>
        </div>
      </Title_pagina>

      <Question/>
    </>
  );
};

export default Faq;
