import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_VOTE } from '../../utils/mutations';
import { QUERY_MATCHUPS } from '../../utils/queries';
import { QUERY_TECH } from '../../utils/queries';
import { useNavigate } from 'react-router-dom';

// import { Card } from "react-bootstrap";

const ConsolesList = ({ tech, title }) => {
  // if (!Consoles.length) {
  //   return <h3>No Consoles Yet</h3>;
  // }

  return (
    <div>
      <h3>{title}</h3>
      {tech &&
        tech.map((tech) => (
          <div key={tech._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {tech.item} <br />
              <span style={{ fontSize: '1rem' }}>
                console price is {tech.price}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{tech.item}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ConsolesList;
// const Consoles = () => {
//   const { loading, data } = useQuery(QUERY_TECH);

//   const techList = data?.tech || [];

//   let navigate = useNavigate();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return ( 
//   <div className="my-3 p-3 rounded"> (
//     <div className="card bg-white card-rounded w-50">
//       <div className="card-header bg-dark text-center">
//         <h1>
//          put console stuff here
//         </h1>
//         <p> {techList.map((tech)=> {
//           return (
//             <div key= {tech._id} value={tech.name}>{tech.name}{tech.price}</div>
//           );
//         })}
//         </p>
//       </div>
//     </div>
//     </div>
//   );


// };


