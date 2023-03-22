const jwt = require("jsonwebtoken");
require("dotenv").config();

// req and res from front and
// next work function
const auth = (req, res, next) => {
  try {
    // from front-end there is a token
    const token = req.header("x-auth-token");
    if (!token)
      return res
        .status(401)
        .json({ msg: "No authentication token, authorization denied." });
    // token from front-end
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(verified);
    if (!verified)
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied." });

    req.id = verified.id;
    // to login
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = auth;
