// to route purpose
const router = require("express").Router();
const {
  askquastion,
  getquastionById,
  getQuestions,
} = require("./quastion.controller");
router.post("/", askquastion);
router.get("/:id", getquastionById);
router.get("/", getQuestions);
// router.get("/byid", getUserById);
module.exports = router;
