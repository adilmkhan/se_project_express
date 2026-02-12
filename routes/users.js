const router = require("express").Router();
const {
  getUsers,
  getCurrentUser,
  updateProfile,
} = require("../controllers/users");

module.exports = router;
// router.get("/", getUsers);
router.get("/me", getCurrentUser);
// router.post("/", createUser);
router.patch("/me", updateProfile);
