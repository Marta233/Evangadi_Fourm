// to route purpose
const router = require("express").Router();
const {
  answerQuaestion,
  getAnswerByQuestionId,
} = require("./answer.controller");
router.post("/", answerQuaestion);
router.get("/:id", getAnswerByQuestionId);
// router.get("/", getQuestions);
// router.get("/byid", getUserById);
module.exports = router;
