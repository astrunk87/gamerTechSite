const typeDefs = `
  type Tech {
    _id: ID
    item: String!
    price: Int
    imgLoc: String
  }


  type Query {
    teches: [Tech]!
    tech(techId: ID): Tech
  }

  
`;

module.exports = typeDefs;
