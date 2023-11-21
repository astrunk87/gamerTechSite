const typeDefs = `
  type Tech {
    _id: ID
    item: String
    price: Int
    imgLoc: String
    reviews: String
    commentText: String
  }
  type Comment {
    _id: ID
    commentText: String
    
  }
  


  type Query {
    technologies: [Tech]!
    tech(techId: ID!): Tech
   
  }
  type Mutation {
    addReview(Review: String): Tech
    addComment(ReviewId: ID!, commentText: String!): Tech
    removeReview(ReviewId: ID!): Tech
    removeComment(ReviewId: ID!, commentId: ID!): Tech
  }

  
`;

module.exports = typeDefs;
