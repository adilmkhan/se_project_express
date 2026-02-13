const router = require("express").Router();
const {
  getUsers,
  getCurrentUser,
  updateProfile,
} = require("../controllers/users");

module.exports = router;

router.get("/me", getCurrentUser);

router.patch("/me", updateProfile);
