// import React , { useEffect, useState } from 'react'
// import { fetchTeamMembers } from '../../../data/api';
// //import Teamlid from './Teamlid';
// // import { Link } from 'react-router-dom';
// function Test() {
//   const [article, setTeamMembers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchTeamMembers();
//       setTeamMembers(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//     <div className="p-4">
//       {data.data.map((item) => (
//         <div key={item.id} className="border p-4 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold">{item.title}</h2>
//           <p className="text-gray-600">{item.description}</p>
//           {/* Als je een afbeelding-URL hebt, kun je die hier tonen */}
//           {/* <img src={item.img} alt={item.title} className="w-full h-auto mt-2" /> */}
//         </div>
//       ))}
//     </div>
//     </>
//   )
// }

// export default Test;

import React, { useEffect, useState } from "react";
import { fetchTeamMembers } from "../../../data/api";

function Test() {
  const [article, setTeamMembers] = useState(null); // Begin met null om fouten te voorkomen

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTeamMembers();
        setTeamMembers(data);
        console.log(data);
        
      } catch (error) {
        console.error("Fout bij het ophalen van data:", error);
      }
    };
    fetchData();
  }, []);

  if (!article) return <p>Loading...</p>; // Voorkomt fouten als data nog niet geladen is

  

  return (
    <div className="p-4">
      {article.data?.map(
        (
          item // Gebruik ?. om fouten te vermijden als data undefined is
        ) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            {/* {item.image && (
              <img
                src={`${API_URL}${item.image.url}`} // Correcte afbeelding-URL
                alt={item.title}
                className="w-full h-auto mt-2 rounded-lg"
              />
            )} */}
          </div>
        )
      )}
    </div>
  );
}

export default Test;
