import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./style/app.css";
import NavBar from "./Component/navBar";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Lottie from "react-lottie";
import createLottie from "./lottie/newUser.json";

import axios from "axios";

const createUserLottie = {
  loop: true,
  autoplay: true,
  animationData: createLottie,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const IndividualStudent = () => {
  const [editFlag, setEditFlag] = useState(false);
  const [successFlag, setSuccessFlag] = useState(false);

  //student details state

  const [studentName, setName] = useState("");
  const [studentSurname, setSurname] = useState("");
  const [studentAge, setAge] = useState(0);
  const [studentClass, setClass] = useState(0);
  const [studentSchool, setSchool] = useState("");

  useEffect(() => {
    setName("");
    setSurname("");
    setAge(0);
    setClass(0);
    setSchool("");

    setTimeout(() => {
      if (successFlag === true) {
        setSuccessFlag(false);
      }
    }, 1000);
  }, [successFlag]);

  const saveChanges = () => {
    if (
      studentName === "" ||
      studentSurname === "" ||
      studentAge === 0 ||
      studentClass === 0 ||
      studentSchool === ""
    ) {
      alert("please enter all the fields");
      return;
    }
    var data = JSON.stringify({
      name: studentName,
      surname: studentSurname,
      age: studentAge,
      class: studentClass,
      school: studentSchool,
    });

    var config = {
      method: "post",
      url: "http://localhost:5000/api/student",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setEditFlag(false);
        setSuccessFlag(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const EditBtn = () => {
    if (editFlag) {
      return (
        <Button variant="success" onClick={saveChanges}>
          Submit
        </Button>
      );
    } else {
      return <></>;
    }
  };

  const SuccessMsg = () => {
    if (successFlag) {
      return <h3 className="successMsg">User Successfully Added</h3>;
    } else {
      return <></>;
    }
  };

  return (
    <Container fluid>
      <NavBar></NavBar>
      <Row>
        <Lottie options={createUserLottie} height={150} width={150} />
      </Row>
      <h1 className="successMsg">Add User</h1>

      <Row className="d-flex justify-content-center">
        <Col md={6}>
          <Card>
            <Row md={10}>
              <Col md={4} className="d-flex justify-content-center">
                <h2>Name</h2>
              </Col>
              <Col md={8} className="d-flex justify-content-center">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Enter your name"
                  value={studentName}
                  onChange={(e) => {
                    setName(e.target.value);
                    setEditFlag(true);
                  }}
                ></input>
              </Col>
            </Row>
            <Row md={10}>
              <Col md={4} className="d-flex justify-content-center">
                <h2>Surname</h2>
              </Col>
              <Col md={8} className="d-flex justify-content-center">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Enter your surname"
                  value={studentSurname}
                  onChange={(e) => {
                    setSurname(e.target.value);
                    setEditFlag(true);
                  }}
                ></input>
              </Col>
            </Row>
            <Row md={10}>
              <Col md={4} className="d-flex justify-content-center">
                <h2>Age</h2>
              </Col>
              <Col md={8} className="d-flex justify-content-center">
                <input
                  className="form-control form-control-lg"
                  type="number"
                  placeholder="Name"
                  value={studentAge}
                  onChange={(e) => {
                    setAge(e.target.value);
                    setEditFlag(true);
                  }}
                ></input>
              </Col>
            </Row>
            <Row md={10}>
              <Col md={4} className="d-flex justify-content-center">
                <h2>Class</h2>
              </Col>
              <Col md={8} className="d-flex justify-content-center">
                <input
                  className="form-control form-control-lg"
                  type="number"
                  placeholder="Name"
                  value={studentClass}
                  onChange={(e) => {
                    setClass(e.target.value);
                    setEditFlag(true);
                  }}
                ></input>
              </Col>
            </Row>
            <Row md={10}>
              <Col md={4} className="d-flex justify-content-center">
                <h2>School</h2>
              </Col>
              <Col md={8} className="d-flex justify-content-center">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Enter your school name"
                  value={studentSchool}
                  onChange={(e) => {
                    setSchool(e.target.value);
                    setEditFlag(true);
                  }}
                ></input>
              </Col>
            </Row>
            <Row className="topSpace25"></Row>
            <Row md={10}>
              <Col md={12} className="d-flex justify-content-center">
                <EditBtn></EditBtn>
              </Col>
            </Row>
            <Row md={10}>
              <Col md={12} className="d-flex justify-content-center">
                <SuccessMsg />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default IndividualStudent;
