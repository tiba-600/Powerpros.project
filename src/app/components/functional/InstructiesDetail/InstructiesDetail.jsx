import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchInstructie } from "../../../../data/api";
import "./InstructiesDetail.css";
import { FaArrowLeft } from "react-icons/fa";

const InstructiesDetail = () => {
  const { instructieKey, vraagIndex } = useParams();
  const [instructie, setInstructie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchInstructie();
        const selectedInstructie = data.data.find(
          (inst) => inst.documentId === instructieKey
        );
        setInstructie(selectedInstructie);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [instructieKey]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const vraag = instructie?.vragen?.vragen?.[parseInt(vraagIndex)];
  const antwoord = instructie?.antwoorden?.antwoorden?.[parseInt(vraagIndex)];

  const andereVragen = instructie?.vragen?.vragen?.filter(
    (_, index) => index !== parseInt(vraagIndex)
  );

  const imageURL = instructie?.imgCover?.url
    ? `http://localhost:1337${instructie.imgCover.url}`
    : null;

  return (
    <div className="instructiesdetail__container">
      <Link to="/instructies" className="instructie__link">
        <FaArrowLeft size={16} className="instructiesdetail__icon" />
      </Link>

    <div className="instructiesdetail__flex">
      

      <div className="instructiesdetail">
        <p className="instructiesdetail__title">
          {vraag ? vraag.vraag : "Geen vraag beschikbaar"}
        </p>

        <div>
          {antwoord ? (
            <div className="instructiesdetail__antwoord">
              <ol>
                {antwoord.antwoord
                  .split(/[,.] /)
                  .filter(step => step.trim() !== "") 
                  .map((step, stepIndex) => (
                    <li key={stepIndex}>{step.trim()}</li> 
                  ))}
              </ol>
            </div>
          ) : (
            <p>Geen antwoord beschikbaar</p>
          )}
        </div>
      </div>

      {imageURL && (
        <div className="instructiesdetail__image-container">
          <img
            className=""
            src={imageURL}
            alt={instructie.title}
            width={180}
            height={38}
          />
        </div>
      )}

      </div>

      {andereVragen?.length > 0 && (
        <div className="instructiesdetail__vragenlijst">
          <h3>Andere vragen in {instructie.title}</h3>
          <ul>
            {andereVragen.map((item, index) => {
              const echteIndex = instructie.vragen.vragen.indexOf(item);
              return (
                <li key={echteIndex}>
                  <Link to={`/instructiesDetail/${instructie.documentId}/${echteIndex}`}>
                    {item.vraag}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InstructiesDetail;
