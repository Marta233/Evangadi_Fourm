import Button from "react-bootstrap/Button";
import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbars.css";
import logo from "./img/evangadi-logo-home.png";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UseContext";
import ListQuastion from "../ListQuastion/ListQuastion";
function Navbars() {
  const [userData, setUserData] = useContext(UserContext);

  const logout = () => {
    //set global state to undefined will logout the user
    setUserData({
      token: undefined,
      user: undefined,
    });

    //resetting localStorage
    localStorage.setItem("auth-token", "");
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!userData.user) navigate("/");
  }, [userData.user, navigate]);
  return (
    <div id="header">
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container className="linkText">
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="toggles"
          >
            <LegendToggleIcon className="toggl" />
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto link-wrapper">
              <Nav.Link href="#features" className="links-wraper">
                <Link to={ListQuastion}>Home</Link>
              </Nav.Link>
              <Nav.Link href="#pricing" className="links-wraper">
                How It Work
              </Nav.Link>
              <Button variant="primary" className="btn-wraper">
                <a
                  className="btn btn-blue "
                  id="btnbtn"
                  href="#"
                  onClick={logout}
                >
                  {!userData.user ? "SIGN IN" : " Logout"}
                </a>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
