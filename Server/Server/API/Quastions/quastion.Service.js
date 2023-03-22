const Pool = require("../../config/database");

module.exports = {
  quastion: (data, callback) => {
    Pool.query(
      `INSERT INTO quastion(quastion_Title,description,post_id, user_id)VALUES(?,?,?,?)`,
      [data.quastionTitle, data.description, data.postId, data.id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  quastionById: (id, callback) => {
    //getting data from registration and profile tables by joining them
    Pool.query(
      `SELECT * FROM quastion WHERE quastion_id = ?`,
      [id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result[0]);
      }
    );
  },
  getAllQuestion: (callback) => {
    Pool.query(
      `SELECT registration.user_name, quastion_Title,description,post_id,quastion_id FROM quastion JOIN registration ON quastion.user_id = registration.user_id ORDER BY quastion_id DESC`,
      [],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
};
