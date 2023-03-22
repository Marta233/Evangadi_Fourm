const {
  quastion,
  quastionById,
  getAllQuestion,
} = require("./quastion.Service");
module.exports = {
  askquastion: (req, res) => {
    const { quastionTitle, description, id } = req.body;
    console.log(req.body);
    req.body.postId = Math.floor(Math.random() * 10000);
    if (!quastionTitle || !description || !id)
      return res
        .status(400)
        .json({ msg: "Not all quastion fields have been provided!" });
    quastion(req.body, (err, results) => {
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
  getquastionById: (req, res) => {
    //getting req.id from auth middleware
    var id = req.params.id;
    quastionById(id, (err, results) => {
      if (err) {
        console.log(id);
        console.log(err);
        return res.status(500).json({ msg: "database connection err" });
      }
      if (!results) {
        return res.status(400).json({ msg: "Record not found" });
      }
      return res.status(200).json({ data: results });
    });
  },
  getQuestions: (req, res) => {
    getAllQuestion((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "database connection error" });
      }
      return res.status(200).json({ data: results });
    });
  },
};
