import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDiensten } from "../../../../data/api";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {  Link } from "react-router-dom";

import "./DienstenDetail.css";

const DienstDetail = () => {
  const { slug } = useParams();
  const [dienst, setDienst] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchDiensten();

        const selectedDienst = data.data.find((item) => item.slug === slug);

        if (selectedDienst) {
          setDienst(selectedDienst);
        } else {
          setError("Dienst niet gevonden.");
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Er is een fout: {error}</p>;

  return (
    <div className="dienstdetail">
      
       <Link to="/diensten" className="instructie__link">
        <FaArrowLeft size={16} className="instructiesdetail__icon" />
      </Link>

      <div className="dienstdetail__flex">
        <div className="dienstdetail__info">
          <h1>{dienst.title}</h1>
          {dienst.titletext && (
            <p className="dienstdetail__text">{dienst.titletext}</p>
          )}
        </div>
        {dienst.imgCoverDiensten && dienst.imgCoverDiensten.url && (
          <img
            src={`http://localhost:1337${dienst.imgCoverDiensten.url}`}
            alt={dienst.title}
            className="dienstdetail__img"
          />
        )}
      </div>

      <div className="dienstdetail__houdt">
        {dienst.Houdttitle && (
          <p className="dienstdetail__houdttitle">{dienst.Houdttitle}</p>
        )}

        <ul className="dienstdetail__list">
          {dienst.houdtlist &&
            dienst.houdtlist.split("\n").map((line, index) => (
              <li key={index} className="dienstdetail__houdtlist">
                {line}
              </li>
            ))}
        </ul>
      </div>

      <div className="dienstdetail__kiezen">
        {dienst.titlekiezen && (
          <p className="dienstdetail__titlekiezen">{dienst.titlekiezen}</p>
        )}

        <div className="dienstdetail__kiezenlist">
          <ul>
            {dienst.kiezenlist &&
              dienst.kiezenlist.split("\n").map((line, index) => (
                <li key={index} className="">
                  <FaStar className="star__icon" /> {line}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DienstDetail;
