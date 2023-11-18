const typeDefs = `
  type Tech {
    _id: ID
    item: String
    price: Int
    imgLoc: String
    reviews: String
    comments: String
  }
  type Comment {
    _id: ID
    commentText: String
    
  }
  type Review {
    reviewText: String
  }


  type Query {
    technologies: [Tech]!
    tech(techId: ID!): Tech
  }
  type Mutation {
    addReview(ReviewText: String): Review
    addComment(ReviewId: ID!, commentText: String!): Review
    removeReview(ReviewId: ID!): Review
    removeComment(ReviewId: ID!, commentId: ID!): Review
  }

  
`;

module.exports = typeDefs;
