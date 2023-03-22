// data control eyarge meyasgba
// controll the data
const {
  register,
  getUserByEmail,
  userById,
  getAllUsers,
  profile,
} = require("./User.Service");
const pool = require("../../config/database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  // controller for crating a user
  createUser: (req, res) => {
    const { userName, firstName, lastName, email, password } = req.body;
    console.log(req.body);
    //validation
    if (!userName || !firstName || !lastName || !email || !password)
      return res
        .status(400)
        .json({ msg: "Not all fields have been provided!" });
    if (password.length < 8)
      // using validator
      return res
        .status(400)
        .json({ msg: "Password must be at least 8 characters!" });
    pool.query(
      "SELECT * FROM registration WHERE user_email = ? ",
      [email],
      (err, result) => {
        if (err) {
          return res.status(err).json({ msg: "database connection err" });
        }
        if (result.length > 0) {
          return res
            .status(400)
            .json({ msg: "an account with this email is alrady exist" });
        } else {
          //password encryption
          const salt = bcrypt.genSaltSync();

          //changing the value of password from req.body with the encrypted password
          req.body.password = bcrypt.hashSync(password, salt);
          register(req.body, (err, results) => {
            // error on connection
            if (err) {
              console.log(err);
              return res.status(500).json({ msg: "database connection err" });
            }

            //before registration finish, we need to get the user_id from the database
            // accessing through email
            pool.query(
              "SELECT * FROM registration WHERE user_email = ?",
              [email],
              (err, results) => {
                if (err) {
                  return res
                    .status(err)
                    .json({ msg: "database connection err" });
                }

                //grab the user_id from now inserted data
                req.body.userId = results[0].user_id;
                console.log(req.body);

                //sending data to profile with the user_id included in req.body
                // for req.bodu.userid the value is comes from the data entered now and that i grab from registr
                profile(req.body, (err, results) => {
                  if (err) {
                    console.log(err);
                    return res
                      .status(500)
                      .json({ msg: "database connection err" });
                  }
                  return res.status(200).json({
                    msg: "New user added successfully",
                    data: results,
                  });
                });
              }
            );
          });
        }
      }
    );
  },
  getUserById: (req, res) => {
    //getting req.id from auth middleware
    userById(req.id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "database connection err" });
      }
      if (!results) {
        return res.status(404).json({ msg: "Record not found" });
      }
      return res.status(200).json({ data: results });
    });
  },
  getUsers: (req, res) => {
    getAllUsers((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "database connection err" });
      }
      return res.status(200).json({ data: results });
    });
  },
  login: (req, res) => {
    //destructuring req.body
    const { email, password } = req.body;
    //validation
    if (!email || !password)
      return res
        .status(400)
        .json({ msg: "Not all fields have been provided!" });

    //sending data to check if email exist on our database
    getUserByEmail(email, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({ msg: "database connection err" });
      }
      if (!results) {
        return res
          .status(404)
          .json({ msg: "No account with this email has been registered" });
      }
      //check provided password by the user with the encrypted password from database
      // password == user enter
      // results.user_password == from the databse
      const isMatch = bcrypt.compareSync(password, results.user_password);
      if (!isMatch) return res.status(404).json({ msg: "Invalid Credentials" });
      //creating token for the signed user that expires in 1 hour and using our secret key for creation
      // autentication => verifying the user
      // auterization  > after autentication which part is give a privilage
      //  secret key of jwt (process.env.jwt_secre) to make our token unique
      // then genrate token
      const token = jwt.sign({ id: results.user_id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      //returning token and user-info
      return res.json({
        token,
        user: {
          id: results.user_id,
          display_name: results.user_name,
        },
      });
    });
  },
};
