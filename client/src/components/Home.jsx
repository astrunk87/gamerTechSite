// import { Row, Col } from "react-bootstrap";
import newProduct from "./pages/NewProduct";
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../../utils/queries';
import React from 'react';



 
function Home() {
  return (
    <div>
      <Header />
     
     <h1>
          Welcome to Gamer Gear
        </h1>
        <p>
          Where you can find the best reviews on the newest gamer tech.
        </p>
      <h1>Latest Products</h1> 
      <br></br>
      <h1>Coming Soon</h1> 
      <footer>
        <p>&copy; 2023 Gamer Gear. All rights reserved.</p>
      </footer>
       
      </div>
     );
}



export default Home;