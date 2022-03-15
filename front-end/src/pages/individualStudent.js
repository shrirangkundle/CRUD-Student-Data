import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../app.css";
import NavBar from "./Component/navBar";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

import axios from "axios";

const IndividualStudent = () => {
  const [editFlag, setEditFlag] = useState(false);

  //student details state

  const [studentName, setName] = useState("");
  const [studentSurname, setSurname] = useState("");
  const [studentAge, setAge] = useState(0);
  const [studentClass, setClass] = useState(0);
  const [studentSchool, setSchool] = useState(0);

  let url_string = window.location.href;
  var url = new URL(url_string);
  var student_Id = url.searchParams.get("id");

  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:5000/api/student/${student_Id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setName(response.data.task.name);
        setSurname(response.data.task.surname);
        setAge(response.data.task.age);
        setClass(response.data.task.class);
        setSchool(response.data.task.school);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const saveChanges = () => {
    var data = JSON.stringify({
      name: studentName,
      surname: studentSurname,
      age: studentAge,
      class: studentClass,
      school: studentSchool,
    });

    var config = {
      method: "patch",
      url: "http://localhost:5000/api/student/622b103511453b1cc84a3b00",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setEditFlag(false);
        alert("data updated successfully");
        console.log("data updated");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const EditBtn = () => {
    if (editFlag) {
      return (
        <Button variant="primary" onClick={saveChanges}>
          Edit
        </Button>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <Row className="topSpace25"></Row>

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
                  placeholder="Name"
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
                  placeholder="Name"
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
                  placeholder="Name"
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
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default IndividualStudent;
