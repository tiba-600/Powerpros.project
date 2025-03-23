import { useState, useEffect } from "react";
import { fetchExpert } from "../../../../data/api";
import "./Expert.css";

const Expert = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    const getExperts = async () => {
      try {
        const data = await fetchExpert();
        setExperts(data.data);
      } catch (error) {
        console.error("Fout bij ophalen experts:", error);
      }
    };
    getExperts();
  }, []);

  return (
    <div className="expert">
      <ul>
        {experts.map((expert) => (
          <li key={expert.id}>
            {expert.imgCoverExpert && expert.imgCoverExpert.url && (
              <img
                src={`http://localhost:1337${expert.imgCoverExpert.url}`}
                alt={expert.title}
                className="expert__img"
              />
            )}
            <p className="expert__title">{expert.title}</p>
            <p className="expert__text">{expert.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expert;
