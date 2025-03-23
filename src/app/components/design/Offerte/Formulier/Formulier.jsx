import { useState } from "react";
import { sendOfferteAanvraag } from "../../../../../data/api";
import "./Formulier.css"; 

const Formulier = () => {
  const [formData, setFormData] = useState({
    voornaam: "",
    achternaam: "",
    gsm: "",
    email: "",
    projectbeschrijving: "",
    gewenste_startdatum: "",
    servicetype: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
  
    try {
      const response = await sendOfferteAanvraag(formData);
      setMessage("Offerte succesvol verzonden!");
      setFormData({
        voornaam: "",
        achternaam: "",
        gsm: "",
        email: "",
        projectbeschrijving: "",
        gewenste_startdatum: "",
        servicetype: "",
      });
    } catch (error) {
      setMessage("Er is een fout opgetreden bij het verzenden.");
    }
  
    setLoading(false);
  };

  return (
    <div className="formulier">
      <div className="formulier__formulier">
        <h2 className="">Offerte Aanvraag</h2>
        {message && <p className="contact__message">{message}</p>}
        <form onSubmit={handleSubmit} className="formulier__from">
          <div className="formulier__input">
            <label>Voornaam:</label>
            <input
              type="text"
              name="voornaam"
              placeholder="Voornaam"
              value={formData.voornaam}
              onChange={handleChange}
              required
              className=""
            />
            <label>Achternaam:</label>
            <input
              type="text"
              name="achternaam"
              placeholder="Achternaam"
              value={formData.achternaam}
              onChange={handleChange}
              required
              className=""
            />
          </div>

          <div className="">
            <label>Gsm:</label>
            <input
              type="tel"
              name="gsm"
              placeholder="Gsm"
              value={formData.gsm}
              onChange={handleChange}
              required
              className=""
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className=""
            />
          </div>

          <label>Projectbeschrijving:</label>
          <textarea
            name="projectbeschrijving"
            placeholder="Beschrijf uw project"
            value={formData.projectbeschrijving}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>

          <label>Gewenste startdatum:</label>
          <input
            type="date"
            name="gewenste_startdatum"
            value={formData.gewenste_startdatum}
            onChange={handleChange}
            required
          />

          <label>Servicetype:</label>
          <select className="formulier__servicetype"
            name="servicetype"
            value={formData.servicetype}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Kies een servicetype
            </option>
            <option value="Wifi Installatie">Wifi Installatie</option>
            <option value="Netwerkuitbreiding">Netwerkuitbreiding</option>
            <option value="Elektriciteitswerken">Elektriciteitswerken</option>
          </select>

          <button type="submit" className="" disabled={loading}>
            {loading ? "Verzenden..." : "Offerteaanvraag indienen"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulier;
