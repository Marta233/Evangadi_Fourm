import "./App.css";
import axios from "axios";
import Navbars from "./component/Nav/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer/Footer";
import Login from "./component/user/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AskQustion from "./component/AskQuastion/AskQustion";
import Answer from "./component/Answer/Answer";
import ListQuastion from "./component/ListQuastion/ListQuastion";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UseContext";
function App() {
  const [userData, setUserData] = useContext(UserContext);

  const checkLoggedIn = async () => {
    //check if the token already exist in local storage
    let token = localStorage?.getItem("auth-token");
    if (token === null) {
      //token doesnt exist in local storage then set auth token empty
      localStorage?.setItem("auth-token", "");
      token = "";
    } else {
      //if token exist in localstorage then use auth to verify token and get user info
      const userRes = await axios?.get("http://localhost:5000/api/users", {
        headers: { "x-auth-token": token },
      });

      // set the global state with user info
      setUserData({
        token,
        user: {
          id: userRes?.data.data.user_id,
          display_name: userRes?.data.data.user_name,
        },
      });
    }
  };

  // const logout = () => {
  //   //set global state to undefined will logout the user
  //   setUserData({
  //     token: undefined,
  //     user: undefined,
  //   });

  //   //resetting localStorage
  //   localStorage.setItem("auth-token", "");
  // };

  useEffect(() => {
    //check if the user is logged in
    checkLoggedIn();
  }, []);
  console.log(userData);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbars />
              <Login />
              <Footer />
            </>
          }
        />
        {/* <Route
          path="/Login"
          element={
            <>
              <Navbars />
              <Login />
              <Footer />
            </>
          }
        /> */}
        <Route
          path="/AskQustion"
          element={
            <>
              <Navbars />
              <AskQustion />
            </>
          }
        />
        <Route
          path="/ListQuastion/:id"
          element={
            <>
              <Navbars />
              <Answer />
            </>
          }
        />
        {/* <Route
          path="/Answer"
          element={
            <>
              <Navbars />
              <Answer />
            </>
          }
        /> */}
        <Route
          path="/ListQuastion"
          element={
            <>
              <Navbars />
              <ListQuastion />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
