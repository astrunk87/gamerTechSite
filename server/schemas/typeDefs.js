const typeDefs = `
  type Tech {
    _id: ID
    item: String
    price: Int
    imgLoc: String
    reviews: [String]!  
    commentText: String
  } 

  type Review{
    review: String
  }

  type Query {
    technologies: [Tech]!
    tech(techId: ID!): Tech
    reviews: [Review]!
  }

  
  type Mutation {
   
    addComment(ReviewId: ID!, commentText: String!): Tech
    removeReview(ReviewId: ID!): Tech
    removeComment(ReviewId: ID!, commentId: ID!): Tech
    addReview(techId: ID!, review: String!): Tech
  }

  
`;

module.exports = typeDefs;
