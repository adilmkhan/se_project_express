const router = require("express").Router();
const { getCurrentUser, updateProfile } = require("../controllers/users");

const { validateUserUpdate } = require("../middlewares/validation");

module.exports = router;

router.get("/me", getCurrentUser);

router.patch("/me", validateUserUpdate, updateProfile);
