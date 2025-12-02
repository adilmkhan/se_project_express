const router = require("express").Router();
const {
  getclothingItems,
  createclothingItem,
  deleteclothingItem,
  likeclothingItem,
  dislikeclothingItem,
} = require("../controllers/clothingItems");

router.get("/", getclothingItems);
router.post("/", createclothingItem);
router.delete("/:itemId", deleteclothingItem);
router.put("/:itemId/likes", likeclothingItem);
router.delete("/:itemId/likes", dislikeclothingItem);

module.exports = router;
