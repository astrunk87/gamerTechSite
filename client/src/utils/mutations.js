import { gql } from '@apollo/client';



export const ADD_REVIEW = gql`
  mutation addReview($techId: ID!, $review: String!) {
    addReview(techId: $techId, review: $review) {
      reviews   
    
    }
  }
`;

