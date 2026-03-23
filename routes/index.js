const router = require("express").Router();
const { login, createUser } = require("../controllers/users");

const auth = require("../middlewares/auth");

const {
  validateUserRegistration,
  validateUserLogin,
} = require("../middlewares/validation");

router.post("/signin", validateUserLogin, login);
router.post("/signup", validateUserRegistration, createUser);

router.use("/items", require("./clothingItems"));
router.use("/users", auth, require("./users"));

module.exports = router;
