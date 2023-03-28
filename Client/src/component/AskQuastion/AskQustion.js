import React, { useContext, useEffect, useState } from "react";
import "./AskQustion.css";
import Form from "react-bootstrap/Form";

import { UserContext } from "../../context/UseContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AskQustion() {
  const navigate = useNavigate();
  const [err, setError] = useState(null);
  // To get form data
  const [form, setForm] = useState({});
  const [userData, setUserData] = useContext(UserContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await axios.post("http://localhost:5000/api/quastion", {
        // take values from the user entered value
        quastionTitle: form.title,
        description: form.description,
        id: userData.user.id,
      });

      //update global state with response from backend(user-info)
    } catch (error) {
      console.log("problem", error.response.data.msg);
      setError(error?.response.data.msg);
    }
  };
  console.log(userData.id);
  useEffect(() => {
    if (!userData.user) navigate("/Login");
  }, [userData.user, navigate]);

  return (
    <div className="main">
      <div className="instraction">
        <h5>Steps To Write A Good Quastion</h5>
        <ul>
          <li>Summerize your problem in a one-line title.</li>
          <li>Describe your problem in more detail</li>
          <li>Describe what you tried and you expected to happen</li>
          <li>Review your quastion and post it to the site</li>
        </ul>
      </div>
      <div className="maincontant">
        <div className="quastionTitle">
          <h5>Ask a Public Quastion</h5>
          <a href="#">Go To Quastion Page</a>
        </div>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 ">
              <Form.Control
                className="textarea1"
                id="places"
                name="title"
                placeholder="Title"
                as="textarea"
                onChange={handleChange}
                rows={2}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Control
                className="textarea1"
                id="places1"
                name="description"
                placeholder="Quastion Description.."
                onChange={handleChange}
                as="textarea"
                rows={6}
              />
            </Form.Group>
            <input
              type="submit"
              className="submitQuastion"
              value="Post Your Quastion"
            />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AskQustion;
