import { gql } from '@apollo/client';



export const ADD_REVIEW = gql`
  mutation addReview($techId: ID!, $review: String!) {
    addReview(techId: $techId, review: $review) {
      reviews   
    
    }
  }
`;
export const UPDATE_REVIEW = gql`
  mutation updateReview($techId: ID!, $review: String!) {
    updateReview(techId: $techId, review: $review) {
      reviews   
    
    }
  }
`;
export const REMOVE_REVIEW = gql`
  mutation removeReview($techId: ID!, $review: String!) {
    removeReview(techId: $techId, review: $review) {
      reviews   
    
    }
  }
`;

