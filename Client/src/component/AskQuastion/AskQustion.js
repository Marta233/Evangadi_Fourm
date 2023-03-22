import React from "react";
import "./AskQustion.css";
import Form from "react-bootstrap/Form";

function AskQustion() {
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
          <Form>
            <Form.Group className="mb-3 ">
              <Form.Control
                className="textarea1"
                id="places"
                placeholder="Title"
                as="textarea"
                rows={2}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Control
                className="textarea1"
                id="places1"
                placeholder="Quastion Description.."
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
