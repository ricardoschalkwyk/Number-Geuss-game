import React from "react";
import { Card } from "react-bootstrap";
// This component shows the array of numbers that should be remebered
function NumberGrid(props) {
  return (
    <div className="card-wrapper">
      <Card style={{ backgroundColor: "white" }}>
        <Card.Body>
          <Card.Text>{props.number}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NumberGrid;
