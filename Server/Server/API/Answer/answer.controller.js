const { Answer, getanswebyquastionid } = require("./answer.Service");

module.exports = {
  answerQuaestion: (req, res) => {
    const { id, quastion_id, answer } = req.body;
    console.log(req.body);
    if (!id || !quastion_id || !answer) {
      return res
        .status(400)
        .json({ msg: "Not all answer fields have been provided!" });
    }
    Answer(req.body, (err, results) => {
      // error on connection
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "database connection err" });
      }
      return res.status(200).json({
        msg: "New quastion is asked",
        data: results,
      });
    });
  },
  getAnswerByQuestionId: (req, res) => {
    let qId = req.params.id;
    getanswebyquastionid(qId, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "database connection" });
      }
      if (!results) {
        return res.status(400).json({ msg: "Record not found" });
      }
      return res.status(200).json({ data: results });
    });
  },
};
