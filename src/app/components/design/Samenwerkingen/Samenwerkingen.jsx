import { useState } from "react";
import { sendSamenwerkingAanvraag } from "../../../../data/api"; 
import "./Samenwerkingen.css"; 

const SamenwerkingFormulier = () => {
  const [formData, setFormData] = useState({
    voornaam: "",
    achternaam: "",
    gsm: "",
    email: "",
    functietype: "",
    motivatie: "",
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
      const response = await sendSamenwerkingAanvraag(formData);
      setMessage("Aanvraag succesvol verzonden!");
      setFormData({
        voornaam: "",
        achternaam: "",
        gsm: "",
        email: "",
        functietype: "",
        motivatie: "",
      });
    } catch (error) {
      setMessage("Er is een fout opgetreden bij het verzenden.");
    }

    setLoading(false);
  };

  return (
    <div className="formulier">
    <div className="formulier__formulier">
      <h2>Samenwerking Aanvraag</h2>
      {message && <p className="contact__message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Voornaam:</label>
          <input
            type="text"
            name="voornaam"
            placeholder="Voornaam"
            value={formData.voornaam}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Achternaam:</label>
          <input
            type="text"
            name="achternaam"
            placeholder="Achternaam"
            value={formData.achternaam}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gsm:</label>
          <input
            type="tel"
            name="gsm"
            placeholder="Gsm"
            value={formData.gsm}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Functietype:</label>
          <select
            name="functietype"
            value={formData.functietype}
            onChange={handleChange}
            required
            className="functietype" 
          >
            <option value="" disabled>Kies een functietype</option>
            <option value="Internettechnieker">Internettechnieker</option>
            <option value="Elektrotechnieker">Elektrotechnieker</option>
          </select>
        </div>

        <div className="form-group">
          <label>Motivatie & Ervaring:</label>
          <textarea
            name="motivatie"
            placeholder="Beschrijf je motivatie en ervaring"
            value={formData.motivatie}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Verzenden..." : "Aanvraag indienen"}
        </button>
      </form>
    </div>
    </div>
  );
};

export default SamenwerkingFormulier;