const { Tech } = require("../models");

const resolvers = {
  Query: {
    technologies: async () => {
      return Tech.find();
    },
    tech: async (parent, { techId }) => {
      return Tech.findOne({ _id: techId });
    },
  },
  Mutation: {
    addReview: async (parent, { techReview }) => {
      return Tech.create({ techReview });
    },
    addComment: async (parent, { techId, comment}) => {
      return Tech.findOneAndUpdate(
        { _id: techId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeReview: async (parent, { techId }) => {
      return Thought.findOneAndDelete({ _id: techId });
    },
    removeComment: async (parent, { techId, commentId }) => {
      return Tech.findOneAndUpdate(
        { _id: techId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;

// testing new branch
