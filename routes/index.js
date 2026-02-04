const router = require("express").Router();
const { login, createUser } = require("../controllers/users");

//Auth routes(no /users prefix)
router.post("/signin", login);
router.post("/signup", createUser);

router.use("/items", require("./clothingItems"));
router.use("/users", require("./users"));

module.exports = router;
