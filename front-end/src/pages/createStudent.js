import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../app.css";
import NavBar from "./Component/navBar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <NavBar></NavBar>
      <Row className="topSpace25"></Row>

      <Row md={10}></Row>
    </>
  );
};

export default Dashboard;
