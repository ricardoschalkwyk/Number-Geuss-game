import React from "react";
import { Button } from "react-bootstrap";

// added useState Props for useEffect -
function NumberAnswer({ onClick, number }) {
  // added useEffet -

  return (
    <>
      <div className="card-wrapper">
        <Button
          style={{ minHeight: "100px", minWidth: "150px" }}
          // Gets the number that should be displayed as an answer
          onClick={() => {
            onClick?.(number);
          }}
        >
          {number}
        </Button>
      </div>
    </>
  );
}

export default NumberAnswer;
