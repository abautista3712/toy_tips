// For Sequelize data model
module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("review", {
      toyName: {
        type: Sequelize.STRING,
      },
      shortReview: {
        type: Sequelize.STRING,
      },
    });
  
    return Review;
  };