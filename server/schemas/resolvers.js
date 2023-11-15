const { Tech } = require('../models');

const resolvers = {
  Query: {
    teches: async () => {
      return Tech.find({});
    },
    // tech: async (parent, { techId }) => {
    //   return Tech.findOne({ _id: techId });
    // },
  },
  // Mutation: {
  //   createMatchup: async (parent, args) => {
  //     const matchup = await Matchup.create(args);
  //     return matchup;
  //   },
  //   createVote: async (parent, { _id, techNum }) => {
  //     const vote = await Matchup.findOneAndUpdate(
  //       { _id },
  //       { $inc: { [`tech${techNum}_votes`]: 1 } },
  //       { new: true }
  //     );
  //     return vote;
  //   },
  // },
};

module.exports = resolvers;
