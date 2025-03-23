import "./Question.css";
import React, { useEffect, useState } from 'react';
import { fetchFaq } from '../../../../data/api'; 

const Questions = () => {
  const [faqs, setFaqs] = useState([]);
  const [openAnswerId, setOpenAnswerId] = useState(null); 

  // Haal de FAQ-gegevens op
  useEffect(() => {
    const getFaqs = async () => {
      const data = await fetchFaq();
      setFaqs(data.data); 
    };
    getFaqs();
  }, []);

  //Antwoord te openen/sluiten
  const toggleAnswer = (index) => {
    if (openAnswerId === index) {
      setOpenAnswerId(null); 
    } else {
      setOpenAnswerId(index); 
    }
  };


  return (
    <div className="faq">
      {faqs.map((faq) => (
        <div key={faq.id} className="faq-item">
          <h2 className="faq-title">{faq.title}</h2>
          <div className="faq-details">
            {faq.details && faq.details.uitleg && faq.details.uitleg.length > 0 ? (
              faq.details.uitleg.map((item, index) => (
                <div key={index} className="faq-card">
                  <div
                    className="faq__vragen"
                    onClick={() => toggleAnswer(index)} 
                  >
                    <p className="faq_vraag">{item.text}</p>
                    {openAnswerId === index && faq.Antwoorden && faq.Antwoorden.antwoorden && faq.Antwoorden.antwoorden[index] && (
                      <div className="faq__antwoorden">
                        <p>{faq.Antwoorden.antwoorden[index].antwoord}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="faq-question">Geen vragen beschikbaar</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;