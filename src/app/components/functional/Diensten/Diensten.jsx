import React, { useEffect, useState } from "react";
import { fetchDiensten } from "../../../../data/api";
import { NavLink } from "react-router-dom";

import "./Diensten.css";

const Diensten = () => {
  const [diensten, setDiensten] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchDiensten();
        console.log(data); 

        setDiensten(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Laadstatus
  if (loading) return <p>Loading...</p>;

  // Foutmelding
  if (error) return <p>Er is een fout: {error}</p>;

  return (
    <div className="diensten">
      <div className="diensten__title">
        <h2>Onze Diensten</h2>
      </div>
      <div className="diensten__list">
        <ul>
          {diensten?.map((item) => {
            const imageURL = item.imgCoverDiensten?.url
              ? `http://localhost:1337${item.imgCoverDiensten.url}`
              : null;

            console.log("Image URL:", imageURL); 

            return (
              <li key={item.id}>
                <NavLink to={`/diensten/${item.slug}`} activeClassName="active">
                  {imageURL && (
                    <img
                      className="detail__uitleg img--detail"
                      src={imageURL}
                      alt={item.title}
                      width={180}
                      height={38}
                    />
                  )}
                  <p>{item.title}</p>
                   
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Diensten;