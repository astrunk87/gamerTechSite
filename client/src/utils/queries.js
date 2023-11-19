import { gql } from "@apollo/client";

export const QUERY_TECH = gql`
  query getTechnologies {
    technologies {
      _id
      item
      price
      imgLoc
      reviews
      commentText
    }
  }
`;

// export const QUERY_TECHREVIEW = gql`
//   query
// `
