import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function NumberPlaceHolder({ answer }) {
  const [parts, setParts] = useState([]);

  // splits every character into an array
  useEffect(() => {
    setParts(answer.split(""));
  }, [answer]);

  // This component switches with the initial array so that your awnser can be displayed
  return (
    <>
      <div className="card-wrapper d-flex">
        <Card style={{ backgroundColor: "white" }}>
          <Card.Body>
            <Card.Text
              style={{ minHeight: "100px", minWidth: "150px", color: "#000" }}
            >
              {parts[0]}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ backgroundColor: "white" }}>
          <Card.Body>
            <Card.Text
              style={{ minHeight: "100px", minWidth: "150px", color: "#000" }}
            >
              {parts[1]}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ backgroundColor: "white" }}>
          <Card.Body>
            <Card.Text
              style={{ minHeight: "100px", minWidth: "150px", color: "#000" }}
            >
              {parts[2]}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ backgroundColor: "white" }}>
          <Card.Body>
            <Card.Text
              style={{ minHeight: "100px", minWidth: "150px", color: "#000" }}
            >
              {parts[3]}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default NumberPlaceHolder;
