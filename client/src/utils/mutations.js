import { gql } from '@apollo/client';



export const ADD_REVIEW = gql`
  mutation addReview($reviews: String!) {
    addReview(Review: $reviews) {
      
      reviews
    }
  }
`;

