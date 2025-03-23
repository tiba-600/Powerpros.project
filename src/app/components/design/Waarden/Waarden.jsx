import { useState, useEffect } from "react";
import { fetchWaarden } from "../../../../data/api";
import "./Waarden.css";

const Waarden = () => {
  const [waarden, setWaarden] = useState([]);

  useEffect(() => {
    const getWaarden = async () => {
      try {
        const data = await fetchWaarden();
        setWaarden(data.data);
      } catch (error) {
        console.error("Fout bij ophalen waarden:", error);
      }
    };
    getWaarden();
  }, []);

  return (
    <div className="expert">
      <ul>
        {waarden.map((waarde) => (
          <li key={waarde.id}>
            {waarde.imgCoverwaarde && waarde.imgCoverwaarde.url && (
              <img
                src={`http://localhost:1337${waarde.imgCoverwaarde.url}`}
                alt={waarde.title}
                className="expert__img"
              />
            )}
            <p className="expert__title">{waarde.title}</p>
            <p className="expert__text">{waarde.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Waarden;
