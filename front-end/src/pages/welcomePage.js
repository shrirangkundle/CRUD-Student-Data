import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./style/app.css";
import NavBar from "./Component/navBar";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Lottie from "react-lottie";
import welcomeLottie from "./lottie/welcomePageLottie.json";

const WelcomePageLottie = {
  loop: true,
  autoplay: true,
  animationData: welcomeLottie,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <NavBar></NavBar>
        <Row>
          <Lottie options={WelcomePageLottie} height={300} width={300} />
        </Row>

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
      </Container>
    </>
  );
};

export default Dashboard;
