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
      <Row className="topSpace"></Row>

      <Row md={10}>
        <Col className="d-flex justify-content-center">
          <Link to="/createStudent">
            {" "}
            <Button variant="success" className="myrsaMainBtn" size="lg">
              New Student
            </Button>
          </Link>
        </Col>
        <Col className="d-flex justify-content-center">
          <Link to="/studentList">
            <Button variant="primary" className="myrsaMainBtn" size="lg">
              Student DB
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
