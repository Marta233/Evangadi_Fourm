const Pool = require("../../config/database");

module.exports = {
  Answer: (data, callback) => {
    Pool.query(
      `INSERT INTO answer(user_id ,quastion_id, answer)VALUES(?,?,?)`,
      [data.id, data.quastion_id, data.answer],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  getanswebyquastionid: (id, callback) => {
    //id is questionId
    Pool.query(
      `SELECT answer_id, answer, quastion_id, registration.user_id, registration.user_name FROM answer LEFT JOIN registration ON answer.user_id = registration.user_id WHERE answer.quastion_id = ?`,
      [id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
};
