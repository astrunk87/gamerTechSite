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
    
    addReview: async (parent, { techId, review}) => {
      return Tech.findOneAndUpdate(
        { _id: techId },
        {
          $addToSet: { reviews: review },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    
    updateReview: async (parent,{ techId, review}) => {
      return await Tech.findOneAndUpdate(
        {_id: techId},
        {review},
        {
          new: true,
          runValidators: true,
        }

      );
    },
   
    removeReview: async (parent, { techId, review }) => {
      return Tech.findOneAndDelete(
        { _id: techId },
        { $pull: {reviews: review } },
        {
          new: true,
          runValidators: true,
        }
      );
    },
  },
};

module.exports = resolvers;

// testing new branch
