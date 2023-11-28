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
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>
         put in stuff for controllers here
        </h1>
      </div>
    </div>
    </div>
  );
};

export default Controllers;
