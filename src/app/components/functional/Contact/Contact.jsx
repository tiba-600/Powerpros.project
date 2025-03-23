import Contact_formulier from "@design/contact/Contact_formulier/Contact_formulier";
import "./Contact.css";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import ContactInfo from "@design/ContactInfo/ContactInfo";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h2 className="contact__title">Contact Ons</h2>
        <div className="contact__img">
          <img src="/foto's/customer-service.jpg" alt="Contact Icons" />
        </div>

        <div className="contact__flex">
          <ContactInfo/>
          <Contact_formulier />
        </div>
      </div>
    </>
  );
};

export default Contact;
