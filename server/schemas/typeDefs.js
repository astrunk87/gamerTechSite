const typeDefs = `
  type Tech {
    _id: ID
    item: String
    price: Int
    imgLoc: String
    reviews: [String]!  
  
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
   
     addReview(techId: ID!, review: String!): Tech
    removeReview(techId: ID!, review: String!): Tech
    updateReview(techId: ID!, review: String!): Tech
  }  
`;

module.exports = typeDefs;
