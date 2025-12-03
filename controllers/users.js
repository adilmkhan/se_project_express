const User = require("../models/user");
const {
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require("../utils/errors.js");

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => {
      console.error(err);
      console.log(err.name);
      if (err.name === "CastError") {
        res.status(BAD_REQUEST).send({ message: err.message });
      } else {
        res.status(INTERNAL_SERVER_ERROR).send({ message: err.message });
      }
    });
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .orFail()
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.error(err);
      console.log(err.name);
      if (err.name === "CastError") {
        res.status(BAD_REQUEST).send({ message: err.message });
      } else if (err.name === "DocumentNotFoundError") {
        res.status(NOT_FOUND).send({ message: err.message });
      } else {
        res.status(INTERNAL_SERVER_ERROR).send({ message: err.message });
      }
    });
};

module.exports.createUser = (req, res) => {
  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.error(err);
      console.log(err.name);
      if (err.name === "ValidationError") {
        res.status(BAD_REQUEST).send({ message: err.message });
      } else {
        res.status(INTERNAL_SERVER_ERROR).send({ message: err.message });
      }
    });
};
