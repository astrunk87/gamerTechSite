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
    <div className="container ">
      <h3>{title}</h3>
      <div className=" flex-wrap">
        {tech.map((item) => (
          <div key={item._id} className="card m-2" style={{ maxWidth: '' }}>
            <img
              src={item.imgLoc}
              alt={item.item}
              className="card-img"
              style={{ maxHeight: '', maxWidth: '', objectFit: '' }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.item}</h5>
              <p className="card-text">
                <strong>Price:</strong> {item.price}
              </p>

              <div className="reviews">
              <p className="card-text">Reviews: </p>
              <ul className="reviews-list">
             {item.reviews.map((review, index) => (
                    <li className="review-item" key={index}>
                      {review}
                    </li>
                  ))}
                </ul>
              </div>
              {/* <p className="card-text">Comments: {item.commentText}</p> */}
              <ReviewForm techId={item._id} tech={tech} title="lorem"/>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default itemsList;
