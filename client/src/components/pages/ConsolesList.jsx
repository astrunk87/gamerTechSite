import { useQuery, useMutation } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { QUERY_TECH } from "../../utils/queries";
import { useNavigate } from "react-router-dom";
import ReviewForm from "../pages/Reviews";
import React from 'react';

// import { Card } from "react-bootstrap";

// const ConsolesList = ({ teches, title }) => {
//   // if (!Consoles.length) {
//   //   return <h3>No Consoles Yet</h3>;
//   // }

//   return (
//     <div>
//       <h3>{title}</h3>
//       {teches &&
//         teches.map((teches) => (
//           <div key={teches._id} className="card mb-3">
//             <h4 className="card-header bg-primary text-light p-2 m-0">
//               {teches.item} <br />
//               <span style={{ fontSize: '1rem' }}>
//                 console price is {teches.price}
//               </span>
//             </h4>
//             <div className="card-body bg-light p-2">
//               <img src={teches.imgLoc}></img>
//               <p>{teches.reviews}</p>


//             </div>
            
//           </div>
//         ))}
//     </div>
//   );
// };



// export default ConsolesList;


const ConsolesList = ({ tech, title }) => {
  if (!tech || tech.length === 0) {
    return <h3>No Consoles Yet</h3>;
  }

  return (
    <div className="container mt-4">
      <h3>{title}</h3>
      <div className="d-flex flex-wrap">
        {tech.map((console) => (
          <div key={console._id} className="card m-2" style={{ maxWidth: '14rem' }}>
            <img
              src={console.imgLoc}
              alt={console.item}
              className="card-img-top"
              style={{ maxHeight: '10rem', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{console.item}</h5>
              <p className="card-text">
                <strong>Price:</strong> {console.price}
              </p>
              <p className="card-text">Reviews: {console.reviews}</p>
              <p className="card-text">Comments: {console.commentText}</p>
              {/* Assuming ReviewForm is a component */}
              <ReviewForm />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsolesList;
