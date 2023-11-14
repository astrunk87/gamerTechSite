import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_VOTE } from '../../utils/mutations';
import { QUERY_MATCHUPS } from '../../utils/queries';

// import { Card } from "react-bootstrap";

function consoles() {
  return ( 
  <div className="my-3 p-3 rounded"> (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>
         put console stuff here
        </h1>
      </div>
    </div>
    </div>
  );


}

export default consoles;
