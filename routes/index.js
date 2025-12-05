const router = require("express").Router();

router.use("/items", require("./clothingItems"));
router.use("/users", require("./users"));

module.exports = router;
