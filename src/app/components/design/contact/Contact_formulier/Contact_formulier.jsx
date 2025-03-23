import { useState } from "react";
import { submitContactForm } from "../../../../../data/api";
import "./Contact_formulier.css";

const Contact_formulier = () => {
    const [formData, setFormData] = useState({
        voornaam: "",
        achternaam: "",
        email: "",
        onderwerp: "",
        bericht: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitContactForm(formData);
            setMessage("Bericht succesvol verzonden!");
            setFormData({ voornaam: "", achternaam: "", email: "", onderwerp: "", bericht: "" }); // Velden leegmaken
        } catch (error) {
            setMessage("Er is een fout opgetreden bij het verzenden.");
        }
    };

    return (
        <div className="contact-form">
        {message && <p className="contact__message">{message}</p>}
            <p className="contact-form__description">
                Heeft u een specifieke vraag of wilt u meer informatie? 
                Vul het formulier hieronder in en stuur ons een bericht. 
                Wij reageren zo snel mogelijk!
            </p>
       
            <form onSubmit={handleSubmit}>
                <label>Voornaam:</label>
                <input type="text" name="voornaam" value={formData.voornaam} onChange={handleChange} required />

                <label>Achternaam:</label>
                <input type="text" name="achternaam" value={formData.achternaam} onChange={handleChange} required />

                <label>E-mailadres:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Onderwerp:</label>
                <input type="text" name="onderwerp" value={formData.onderwerp} onChange={handleChange} required />

                <label>Bericht:</label>
                <textarea name="bericht" value={formData.bericht} onChange={handleChange} rows="4" required></textarea>

                <button type="submit">Bericht Verzenden</button>
            </form>
        </div>
    );
}

export default Contact_formulier;
