import React, { useContext, useEffect, useState } from "react";
import "./Answer.css";
import Form from "react-bootstrap/Form";
import prof from "../imgs.png";
import { UserContext } from "../../context/UseContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Answer() {
  const [userData, setUserData] = useContext(UserContext);
  console.log(userData);

  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState();

  const navigate = useNavigate();
  const { id } = useParams();
  // console.log("question id " + id)
  const [form, setForm] = useState({});

  var [counter, setCounter] = useState(1);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log(form.description);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const questionAsk = await axios.post("http://localhost:5000/api/answer", {
        answer: form.describtion,
        quastion_id: id,
        id: userData.user.id,
        // answerCodeBlock: "first",
      });

      setCounter((value) => {
        return ++value;
      });

      // navigate("/home");
    } catch (err) {
      console.log("problem", err);
      alert(err.response.data.msg);
    }
  };
  useEffect(() => {
    const getQuestion = async () => {
      try {
        const questionAsk = await axios?.get(
          `http://localhost:5000/api/quastion/${id}`
        );
        console.log(questionAsk?.data.data);
        setQuestion(questionAsk?.data.data);
      } catch (err) {
        console.log("problem", err);
        // console.log(err.response.data.msg);
      }
    };
    getQuestion();
  }, []);
  // Axios to get answers by id
  useEffect(() => {
    const getData = async () => {
      try {
        const questionRes = await axios?.get(
          `http://localhost:5000/api/answer/${id}`
        );
        setAnswers(questionRes?.data.data);
        console.log(questionRes.data.data);
      } catch (err) {
        console.log("problem", err);
        // alert(err.response.data.msg);
      }
    };
    getData();
    console.log(answers);
  }, [counter]);
  console.log(question);

  // use effect not to access answer page when isn't login
  useEffect(() => {
    if (!userData.user) navigate("/");
  }, [userData.user]);
  return (
    <div className="main">
      <div className="usersprof_wrapper">
        <div className="Quastions">
          <h4>Quastion</h4>
          <p>{question?.quastion_Title}</p>
          <p className="quastionDescription">{question?.description}</p>
        </div>

        <div className="answers">
          <h4 id="community">Answer From The community</h4>{" "}
          {answers?.map((answr, i) => {
            return (
              <div className="userprof1">
                <div className="usersprofile">
                  <img src={prof} />
                  <p className="userName">{answr.user_name}</p>
                </div>
                <div className="userans">
                  <p>{answr.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="maincontant">
        <div className="quastionTitle">
          <h5>Answer The Top Quastion</h5>
          <a href="#">Go To Quastion Page</a>
        </div>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 ">
              <Form.Control
                className="textarea1"
                id="places1"
                name="describtion"
                placeholder="Your Answer.."
                as="textarea"
                rows={6}
                onChange={handleChange}
              />
            </Form.Group>
            <input
              type="submit"
              className="submitQuastion"
              value="Post Your Answer"
            />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Answer;
