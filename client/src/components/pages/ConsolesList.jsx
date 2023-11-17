import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_VOTE } from '../../utils/mutations';
// import { QUERY_MATCHUPS } from '../../utils/queries';
import { QUERY_TECH } from '../../utils/queries';
import { useNavigate } from 'react-router-dom';

// import { Card } from "react-bootstrap";

const ConsolesList = ({ teches, title }) => {
  // if (!Consoles.length) {
  //   return <h3>No Consoles Yet</h3>;
  // }

  return (
    <div>
      <h3>{title}</h3>
      {teches &&
        teches.map((teches) => (
          <div key={teches._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {teches.item} <br />
              <span style={{ fontSize: '1rem' }}>
                console price is {teches.price}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{teches.item}</p>
              <img src={teches.imgLoc}></img>

            </div>
            
          </div>
        ))}
    </div>
  );
};



export default ConsolesList;



