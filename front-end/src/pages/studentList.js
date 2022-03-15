import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../app.css";
import NavBar from "./Component/navBar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const StudentList = () => {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/student", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        var newRes = JSON.parse(result);
        console.log(newRes);
        console.log(typeof newRes);
        setStudentList(newRes.tasks);
        console.log(studentList);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Row className="topSpace25"></Row>

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
                  <Col md={4} className="d-flex justify-content-end">
                    {/*  */}
                    <Link to={`/studentDetails?id=${item._id}`}>
                      <Button variant="warning">details</Button>
                    </Link>
                  </Col>
                </Row>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default StudentList;
