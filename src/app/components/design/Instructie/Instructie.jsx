import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "./Instructie.css";
import { FaArrowRight } from "react-icons/fa";
import { fetchInstructie } from "../../../../data/api";

const Instructie = () => {
  const [instructieData, setInstructieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchInstructie();
        if (data && data.data) {
          setInstructieData(data.data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!instructieData.length) return <div>Geen instructies gevonden.</div>;

  return (
    <div className="instructies">
      {instructieData.map((instructie) => (
        <div key={instructie.documentId} className="instructie__detail">
          <h2>{instructie.title}</h2>
          <ul>
            {instructie.vragen?.vragen?.map((vraag, vraagIndex) => (
              <li key={vraagIndex}>
                <Link
                  to={`/instructiesDetail/${instructie.documentId}/${vraagIndex}`} 
                  className="instructie__link"
                >
                  {vraag.vraag}
                  {/* <FaArrowRight size={16} className="icon" /> */}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Instructie;
