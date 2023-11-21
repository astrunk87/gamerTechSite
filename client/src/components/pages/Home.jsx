// import { Row, Col } from "react-bootstrap";
import newProduct from "./NewProduct";

import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../../utils/queries';




 
function Home() {
  return (
    <div>
        <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#"><Link
              className="btn btn-primary btn-block btn-squared"
              to={`/consoles`}
            >
              Consoles
            </Link></a></li>
        <li><a href="#">About</a></li>
       
      </ul>
    </nav>
     <h1>
          Welcome to Gamer Gear
        </h1>
        <p>
          Where you can find the best reviews on the newest gamer tech.
        </p>
      <h1>Latest Products</h1>  
      <Link
              // className="btn btn-primary btn-block btn-squared"
              to={`/consoles`}
            >
              consoles
            </Link> 
      </div>
     );
}



export default Home;