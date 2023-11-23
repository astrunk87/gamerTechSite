import { useQuery, useMutation } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { QUERY_TECH } from "../../utils/queries";
import { useNavigate } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import React from 'react';




const itemsList = ({ tech, techId, title }) => {
  if (!tech || tech.length === 0) {
    return <h3>No items Yet</h3>;
  }

  return (
    <div className="container mt-4">
      <h3>{title}</h3>
      <div className="d-flex flex-wrap">
        {tech.map((item) => (
          <div key={item._id} className="card m-2" style={{ maxWidth: '14rem' }}>
            <img
              src={item.imgLoc}
              alt={item.item}
              className="card-img-top"
              style={{ maxHeight: '10rem', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.item}</h5>
              <p className="card-text">
                <strong>Price:</strong> {item.price}
              </p>
              <p className="card-text">Reviews: </p>
              <ul>
              {item.reviews.map((review)=>{
            
                return(
                <li>{review}</li>
              )})}
              </ul>
              {/* <p className="card-text">Comments: {item.commentText}</p> */}
              {/* Assuming ReviewForm is a component */}
              <ReviewForm techId={item._id} tech={tech} title="lorem"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default itemsList;
