const router = require("express").Router();
const { login, createUser } = require("../controllers/users");

const auth = require("../middlewares/auth");

router.post("/signin", login);
router.post("/signup", createUser);

router.use("/items", require("./clothingItems"));
router.use("/users", auth, require("./users"));

module.exports = router;
