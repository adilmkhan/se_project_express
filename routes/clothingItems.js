const router = require("express").Router();
const {
  getclothingItems,
  createclothingItem,
  deleteclothingItem,
  likeclothingItem,
  dislikeclothingItem,
} = require("../controllers/clothingItems");

const auth = require("../middlewares/auth");

router.get("/", getclothingItems);
router.post("/", auth, createclothingItem);
router.delete("/:itemId", auth, deleteclothingItem);
router.put("/:itemId/likes", auth, likeclothingItem);
router.delete("/:itemId/likes", auth, dislikeclothingItem);

module.exports = router;
