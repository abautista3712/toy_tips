// Controller, like the name implies

const db = require("../models");
const Review = db.reviews;
const Op = db.Sequelize.Op;
//const Comment = db.comments;

// Sequelize Create (Build() and Save())
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ToyName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Review
  const review = {
    ToyName: req.body.ToyName,
    shortReview: req.body.shortReview,
  };

  // Save Review in the database
  Review.create(review)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Review.",
      });
    });
};

// Retrieve all data from the database
exports.findAll = (req, res) => {
  const ToyName = req.query.ToyName;
  var condition = ToyName ? { ToyName: { [Op.like]: `%${ToyName}%` } } : null;

  Review.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reviews.",
      });
    });
};

// Find single data with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Review.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Review with id=" + id,
      });
    });
};

// Update data by id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Review.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Review was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Review with id=${id}. Maybe Review was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Review with id=" + id,
      });
    });
};

// Delete data with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Review.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Review was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Review with id=${id}. Maybe Review was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Review with id=" + id,
      });
    });
};

// Delete all data from the database
exports.deleteAll = (req, res) => {
  Review.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Reviews were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all reviews.",
      });
    });
};

// Find all published data
exports.findAllPublished = (req, res) => {
  Review.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reviews.",
      });
    });
};
