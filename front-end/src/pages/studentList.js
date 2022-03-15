import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./style/app.css";
import NavBar from "./Component/navBar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Lottie from "react-lottie";
import studentListLottie from "./lottie/studentList.json";

const listLottie = {
  loop: true,
  autoplay: true,
  animationData: studentListLottie,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const StudentList = () => {
  const [studentList, setStudentList] = useState([]);

  const getAllStudents = () => {
    var config = {
      method: "get",
      url: "http://localhost:5000/api/student",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setStudentList(response.data.tasks);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  const deleteUser = (id) => {
    var config = {
      method: "delete",
      url: `http://localhost:5000/api/student/${id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        getAllStudents();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteAll = () => {
    var config = {
      method: "delete",
      url: "http://localhost:5000/api/student",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        getAllStudents();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const DeleteAllBtn = () => {
    if (studentList.length === 0) {
      return <h2>No Students in DB</h2>;
    } else {
      return (
        <Button variant="danger" onClick={() => deleteAll()}>
          Delete All
        </Button>
      );
    }
  };

  return (
    <Container fluid>
      <NavBar></NavBar>
      <Row>
        <Lottie options={listLottie} height={250} width={250} />
      </Row>

      <Row
        md={10}
        id="studentDetails"
        className="d-flex justify-content-center"
      >
        {studentList.map((item, i) => {
          return (
            <Col md={10} className="studentItem" key={i}>
              <Card body bg="success">
                <Row>
                  <Col md={4}>
                    <h3>{i + 1}</h3>
                  </Col>
                  <Col md={4} className="d-flex justify-content-center">
                    <h3>{item.name + " " + item.surname}</h3>
                  </Col>
                  <Col md={2} className="d-flex justify-content-end">
                    <Link to={`/studentDetails?id=${item._id}`}>
                      <Button variant="warning">details</Button>
                    </Link>
                  </Col>
                  <Col md={2} className="d-flex justify-content-end">
                    <Button
                      variant="danger"
                      onClick={() => deleteUser(item._id)}
                    >
                      delete
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="topSpace25"></Row>
      <Row md={10} className="d-flex justify-content-center">
        <Col md={12} className="d-flex justify-content-center">
          <DeleteAllBtn></DeleteAllBtn>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentList;
