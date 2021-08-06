// Controller, like the name implies

const db = require("../models");
const Tutorial = db.tutorials;
const Comment = db.comments;
// const Op = db.Sequelize.Op;

// // Create and Save
// exports.create = (req, res) => {};

// // Retrieve all data from the database
// exports.findAll = (req, res) => {};

// // Find single data with an id
// exports.findOne = (req, res) => {};

// // Update data by id in the request
// exports.update = (req, res) => {};

// // Delete data with the specified id in the request
// exports.delete = (req, res) => {};

// // Delete all data from the database
// exports.deleteAll = (req, res) => {};

// // Find all published data
// exports.findAllPublished = (req, res) => {};

exports.createTutorial = (tutorial) => {
  return Tutorial.create({
    title: tutorial.title,
    description: tutorial.description,
  })
    .then((tutorial) => {
      console.log(">> Created tutorial: " + JSON.stringify(tutorial, null, 4));
      return tutorial;
    })
    .catch((err) => {
      console.log(">> Error while creating tutorial: ", err);
    });
};

exports.createComment = (tutorialId, comment) => {
  return Comment.create({
    name: comment.name,
    text: comment.text,
    tutorialId: tutorialId,
  })
    .then((comment) => {
      console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while creating comment: ", err);
    });
};

exports.findTutorialById = (tutorialId) => {
  return Tutorial.findByPk(tutorialId, { include: ["comments"] })
    .then((tutorial) => {
      return tutorial;
    })
    .catch((err) => {
      console.log(">> Error while finding tutorial: ", err);
    });
};
