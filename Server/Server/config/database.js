const mysql = require("mysql2");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
});
pool.getConnection(function (err, connection) {
  if (err) {
    err;
  } // not connected!
  console.log("connected");
});

let registration = `CREATE TABLE if not exists registration(
    user_id int auto_increment,
    user_name varchar(128) not null,
    user_email varchar(128) not null,
    user_password varchar(128) not null,
    PRIMARY KEY (user_id),
    UNIQUE KEY (user_name)
    )`;
let profile = `CREATE TABLE if not exists profile(
    profile_id int auto_increment,
    user_id int not null,
    first_name varchar(128) not null,
    last_name varchar(128) not null,        
    PRIMARY KEY (profile_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;
let quastion = `CREATE TABLE if not exists quastion(
    quastion_id int auto_increment,
    quastion_Title varchar(128) not null,
    description varchar(128) not null,    
    user_id int not null,
    post_id varchar(150) not null,
    UNIQUE KEY (post_id),
    PRIMARY KEY (quastion_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
    
)`;
let answer = `CREATE TABLE if not exists answer(
    answer_id int auto_increment,
    user_id int not null,
    quastion_id int not null,
    answer varchar(128) not null, 
    PRIMARY KEY (answer_id),      
    FOREIGN KEY (user_id) REFERENCES registration(user_id),
    FOREIGN KEY (quastion_id) REFERENCES quastion(quastion_id)
)`;

pool.query(registration, (err, results) => {
  if (err) {
    console.log("err created");
  }
  //  throw err;
  else {
    console.log("registration table created");
  }
});
pool.query(profile, (err, results) => {
  if (err) throw err;
  console.log("profile table created");
});
pool.query(quastion, (err, results) => {
  if (err) throw err;
  console.log("quastion table created");
});
pool.query(answer, (err, results) => {
  if (err) throw err;
  console.log("answer table created");
});

module.exports = pool;
