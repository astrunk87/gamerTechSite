import { gql } from '@apollo/client';

// export const ADD_PROFILE = gql`
//   mutation addProfile($name: String!) {
//     addProfile(name: $name) {
//       _id
//       name
//       skills
//     }
//   }
// `;

export const ADD_REVIEW = gql`
  mutation addReview($reviews: String!) {
    addReview(Review: $reviews) {
      
      reviews
    }
  }
`;

