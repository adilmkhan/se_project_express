const router = require("express").Router();
const {
  getclothingItems,
  createclothingItem,
  deleteclothingItem,
} = require("../controllers/clothingItems");

router.get("/", getclothingItems);
router.post("/", createclothingItem);
router.delete("/:itemId", deleteclothingItem);

module.exports = router;
