const ClothingItem = require("../models/clothingItem");

module.exports.getclothingItems = (req, res) => {
  ClothingItem.find({})
    // .populate("director")
    .then((items) => res.send({ data: items }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.createclothingItem = (req, res) => {
  console.log(req.user._id);
  const { name, weather, imageUrl } = req.body;
  const owner = req.user._id;
  ClothingItem.create({ name, weather, imageUrl, owner })
    .then((item) => res.send({ data: item }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.deleteclothingItem = (req, res) => {
  ClothingItem.findByIdAndDelete(req.params.itemId)
    .then((item) => res.send({ data: item }))
    .catch((err) => res.status(500).send({ message: err.message }));
};
