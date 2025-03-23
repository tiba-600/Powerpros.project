import { useEffect, useState } from "react";
import { fetchContactInfo } from "../../../../data/api"; // Zorg ervoor dat de juiste import gebruikt wordt!
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import "./ContactInfo.css";

const ContactInfo = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    const getContactInfo = async () => {
      try {
        const response = await fetchContactInfo();
        if (response && response.data.length > 0) {
          setContactData(response.data[0]); 
        }
      } catch (error) {
        console.error("Fout bij ophalen van contactgegevens:", error);
      }
    };

    getContactInfo();
  }, []);

  return (
    <div className="info__list contact--list">
      <p>
        Heeft u vragen of opmerkingen? Wij staan klaar om u te helpen!
        Neem gerust contact met ons op via de onderstaande methoden:
      </p>

      {contactData ? (
        <ul>
          <li>
            <FaPhone className="info__icon" />
            {contactData.gsm}
          </li>
          <li>
            <FaEnvelope className="info__icon" />
            {contactData.email}
          </li>
          <li className="contact__openings">
            <div className="openingstijden__header">
              <FaClock className="openingstijden__icon" />
              <span className="openingstijden__title">Openingstijden:</span>
            </div>
            <span className="openingstijden__time">{contactData.tijd}</span>
          </li>
        </ul>
      ) : (
        <p className="laden">Contactgegevens laden...</p>
      )}
    </div>
  );
};

export default ContactInfo;
