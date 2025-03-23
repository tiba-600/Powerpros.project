import { useState, useEffect } from "react";
import { fetchExpertOfferte } from "../../../../data/api";
import "./Offerte_voordelen.css";

const Offerte_voordelen = () => {
  const [voordelen, setVoordelen] = useState([]);

  useEffect(() => {
    const getVoordelen = async () => {
      try {
        const data = await fetchExpertOfferte();
        setVoordelen(data.data);
      } catch (error) {
        console.error("Fout bij ophalen voordelen:", error);
      }
    };
    getVoordelen();
  }, []);

  return (
    <div className="voordelen">
      <ul>
        {voordelen.map((voordeel) => (
          <li key={voordeel.id}>
            {voordeel.imgCoverOfferte && voordeel.imgCoverOfferte.url && (
              <img
                src={`http://localhost:1337${voordeel.imgCoverOfferte.url}`}
                alt={voordeel.title}
                className=""
              />
            )}
            <p>{voordeel.title}</p>
            <p>{voordeel.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Offerte_voordelen;
