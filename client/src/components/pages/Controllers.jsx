import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_TECH } from '../../utils/queries';
// import { CREATE_MATCHUP } from '../../utils/mutations';
import Header from "../Header";
import { Link } from 'react-router-dom';

const Controllers = () => {
 

  return (
    <div>

    <Header />
    <div className="homepage">
      <div className="card-header text-center">
        <h1>
         Controller page coming soon!
        </h1>
      </div>
    </div>
    </div>
  );
};

export default Controllers;
