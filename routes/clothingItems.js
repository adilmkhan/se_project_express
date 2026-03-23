const router = require("express").Router();
const {
  getclothingItems,
  createclothingItem,
  deleteclothingItem,
  likeclothingItem,
  dislikeclothingItem,
} = require("../controllers/clothingItems");

const {
  validateClothingItem,
  validateId,
} = require("../middlewares/validation");

const auth = require("../middlewares/auth");

router.get("/", getclothingItems);
router.post("/", validateClothingItem, auth, createclothingItem);
router.delete("/:itemId", validateId, auth, deleteclothingItem);
router.put("/:itemId/likes", validateId, auth, likeclothingItem);
router.delete("/:itemId/likes", validateId, auth, dislikeclothingItem);

module.exports = router;
