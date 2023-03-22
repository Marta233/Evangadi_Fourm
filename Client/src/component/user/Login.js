import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UseContext";
import "./Login.css";

const toLoginPage = (e) => {
  var element = document.getElementById("login");
  element.classList.add("hide");

  var element = document.getElementById("create");
  element.classList.remove("hide");
};

const toCreateAccount = () => {
  var element = document.getElementById("login");
  element.classList.toggle("hide");

  var element = document.getElementById("create");
  element.classList.add("hide");
};

function Login() {
  const [userData, setUserData] = useContext(UserContext);
  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    // grab all values and name of the values from the form entered
    // first_Name: Marta
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitsign = async (e) => {
    e.preventDefault();
    try {
      //sending data to be registered in database
      await axios.post("http://localhost:5000/api/users/signin", form);
      logto();
    } catch (error) {
      console.log(error);
      setError(error.response.data.msg);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await axios.post("http://localhost:5000/api/users", {
        // take values from the user entered value
        email: form.email,
        password: form.password,
      });

      //update global state with response from backend(user-info)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      //set localStorage with the token
      localStorage.setItem("auth-token", loginRes.data.token);
      console.log(loginRes.data);
      //navigate user to list of quastion
      navigate("/ListQuastion");
    } catch (error) {
      console.log("problem", error.response.data.msg);
      setError(error?.response.data.msg);
    }
  };
  const logto = async (e) => {
    //sending user data to database to be logged in
    const loginRes = await axios.post("http://localhost:5000/api/users", {
      // take values from the user entered value
      email: form.email,
      password: form.password,
    });

    //update global state with response from backend(user-info)
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    //set localStorage with the token
    localStorage.setItem("auth-token", loginRes.data.token);
    console.log(loginRes.data);
    //navigate user to list of quastion
    navigate("/ListQuastion");
  };
  // useEffect(() => {
  //   // localStorage.setItem("user", JSON.stringify(setUserData));
  //   if (userData.user) navigate("/ListQuastion");
  // }, [userData.user, navigate]);

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="home">
      {/* signin part */}
      <div className="form-wraper hide" id="create">
        <div className="describtion">
          <h4>Join the Network</h4>
          <p>
            Already have an account?
            <div className="linksto" onClick={toCreateAccount}>
              <a href="#">Sign In</a>
            </div>
          </p>
        </div>
        <form onSubmit={handleSubmitsign}>
          <div className="mb-3 ">
            <input
              className="inpts"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Your Email"
            />
          </div>
          <div className="mb-3">
            <div className="inputwrap">
              <input
                className="inpts2"
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
              />
              <input
                className="inpts1"
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 ">
              <input
                className="inpts"
                type="text"
                name="userName"
                placeholder="User Name"
                onChange={handleChange}
              />
            </div>

            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Your Password"
              name="password"
              onChange={handleChange}
            />

            <i
              className={passwordShown ? " fa fa-eye " : "fa fa-eye-slash"}
              aria-hidden="true"
              id="togglePassword"
              onClick={togglePassword}
            ></i>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-primary btn-login login-button col-md-12"
              type="submit"
            >
              Agree and join
            </button>
            {err && <p className="errror">{err}</p>}
          </div>
        </form>

        <p>
          <div className="creat-link" onClick={toCreateAccount}>
            {" "}
            <a href="#">Arady Have account?</a>
          </div>
        </p>
      </div>

      {/* login part */}
      <div className="form-wraper" id="login">
        <div className="describtion">
          <h4>Login to your account</h4>
          <p>
            Don’t have an account?
            <div className="linksto" onClick={toLoginPage}>
              <a href="#">Create a new account </a>
            </div>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <input
              className="inpts"
              name="email"
              type="text"
              placeholder="Your Email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              className="inpts"
              name="password"
              type={passwordShown ? "text" : "password"}
              placeholder="Your Password"
              onChange={handleChange}
            />
            <i
              className={passwordShown ? " fa fa-eye " : "fa fa-eye-slash"}
              aria-hidden="true"
              id="togglePassword"
              onClick={togglePassword}
            ></i>
          </div>
          <div className="btnbtn">
            <button className="btn1">Submit</button>
          </div>
          {err && <p className="errror">{err}</p>}
        </form>
        <p>
          <a className="creat-link" href="#" onClick={toLoginPage}>
            {" "}
            Creat an account?
          </a>
        </p>
      </div>
      <div className="about-wraper">
        <h6>About</h6>
        <h1>Evangadi Networks</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="btn1">HOW IT WORKS</button>
      </div>
    </div>
  );
}

export default Login;
