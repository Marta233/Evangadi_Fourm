import React, { useContext, useEffect, useState } from "react";
import prof from "../imgs.png";
import "./ListQuastion.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UseContext";
import AskQustion from "../AskQuastion/AskQustion";
import axios from "axios";

function ListQuastion() {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [quastion, setQuastion] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("http://localhost:5000/api/quastion");
        console.log(data.data);
        setQuastion(data.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/api/quastion");
  //     const data = await response.json();
  //     setQuastion(data.data);
  //   } catch (err) {
  //     //       console.log("problem", err);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log(quastion);
  useEffect(() => {
    if (!userData.user) navigate("/");
  }, [userData.user, navigate]);

  return (
    <div className="maincontainer">
      <div className="NameandLink">
        <p>
          <Link to={AskQustion}>Ask Quastion</Link>
        </p>
        <p>Wellcome:{userData.user?.display_name}</p>
      </div>
      <div className="ListQuation">
        <h3>Quastion</h3>
      </div>

      {quastion?.map((question, i) => {
        var Q_id = question.quastion_id.toString();
        console.log(Q_id);

        return (
          <Link className="linkspropertu" to={Q_id} key={i}>
            <div className="userprof">
              <div className="userprof1">
                <div className="usersprofile">
                  <img src={prof} />
                  <p className="userName">{question.user_name}</p>
                </div>
                <div className="userans">
                  <p>{question.description}</p>
                </div>
              </div>
              <div>
                <ArrowForwardIosOutlinedIcon className="arrows" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ListQuastion;
