const router = require("express").Router();
const { getCurrentUser, updateProfile } = require("../controllers/users");

module.exports = router;

router.get("/me", getCurrentUser);

router.patch("/me", updateProfile);
