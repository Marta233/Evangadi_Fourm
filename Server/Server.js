const express = require("express");
require("dotenv").config();
const pool = require("./Server/config/database");
const cors = require("cors");
const userRouter = require("./Server/API/USER/User.router");
const quastionRouter = require("./Server/API/Quastions/quastion.router");
const answerRouter = require("./Server/API/Answer/answer.router");
// server create
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/quastion", quastionRouter);
app.use("/api/answer", answerRouter);

// when user req / then res hello worls
// app.get("/marta", function (req, res) {
//   res.end("hello world");
// });

app.listen(port, () => console.log(`Listn at http://localhost:${port}`));
