// to route purpose
const router = require("express").Router();
const auth = require("../middleware/auth");
const { askquastion } = require("../Quastions/quastion.controller");
const {
  createUser,
  getUsers,
  getUserById,
  login,
} = require("./User.controller");

router.post("/signin", createUser);
router.get("/all", getUsers);
router.get("/", auth, getUserById);
router.post("/", login);

// router.get("/byid", getUserById);
module.exports = router;
