// For Sequelize data model
module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("review", {
    ToyName: {
      type: Sequelize.STRING,
    },
    shortReview: {
      type: Sequelize.STRING,
    },
  });

  return Review;
};
