import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ModalAlert from "../components/ModalAlert";
import NumberAnswer from "../components/NumberAnswer";
import NumberGrid from "../components/NumberGrid";
import NumberPlaceHolder from "../components/NumberPlaceHolder";

// array of number

function NumbersGame() {
  const navigate = useNavigate();
  // state for showing 2 components
  const [showComp, setShowComp] = useState(false);
  // state for counter
  const [counter, setCounter] = useState(5);
  // state for answer
  const [answer, setAnswer] = useState("");

  const [refresh, setRefresh] = useState(false);
  // first array that is displayed
  const [gameNumbers, setGameNumbers] = useState([
    { id: "1", number: Math.floor(Math.random() * 10) },
    { id: "2", number: Math.floor(Math.random() * 10) },
    { id: "3", number: Math.floor(Math.random() * 10) },
    { id: "4", number: Math.floor(Math.random() * 10) },
  ]);

  const [gameAnswer, setGameAnswer] = useState(
    gameNumbers.map((item) => item.number).join("")
  );

  // States Shows and Hides modal
  const [show, setShow] = useState(false);
  // State which shows win/lose content
  const [userWon, setUserWon] = useState(false);

  // State which changes show/hide
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSuccess = () => {
    setRefresh(true);
  };

  const handleReject = () => {
    navigate("/");
  };

  // Everytime a new game is made it will run this effect
  useEffect(() => {
    if (refresh) {
      // new displayed array
      const list = [
        { id: "1", number: Math.floor(Math.random() * 10) },
        { id: "2", number: Math.floor(Math.random() * 10) },
        { id: "3", number: Math.floor(Math.random() * 10) },
        { id: "4", number: Math.floor(Math.random() * 10) },
      ];
      // new timer
      setCounter(5);
      setTimeout(() => {
        setShowComp(true);
      }, 5000);

      setShowComp(false);
      setRefresh(false);
      setGameNumbers(list);
      setAnswer("");
      setGameAnswer(list.map((item) => item.number).join(""));
    }
  }, [refresh]);

  // Effect for timer
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  // Checks if user answer is correct
  useEffect(() => {
    if (answer.length === 4) {
      // If user answer is correct/wrong then show modal.
      setUserWon(answer === gameAnswer ? true : false);
      setShow(true);
    }
  }, [answer, gameAnswer]);

  useEffect(() => {
    setTimeout(() => {
      setShowComp(true);
    }, 5000);
  }, []);

  return (
    <>
      {/* Looping gameNumbers array */}
      <Container className="position-relative">
        {/* timer */}
        <div className="timer">Time left : {counter}</div>
        <div className="loop ">
          {!showComp &&
            gameNumbers.map((numbers) => (
              <NumberGrid key={numbers.id} {...numbers} />
            ))}
          {showComp && <NumberPlaceHolder answer={answer} />}
        </div>

        {/* {should} Display when time runs out */}

        {showComp && (
          <div className="answers-container ">
            <div className="answers">
              {Array.from(Array(10).keys()).map((number, index) => (
                <NumberAnswer
                  key={index}
                  number={number}
                  onClick={(number) => {
                    if (answer.length < 4) {
                      setAnswer((answer) => `${answer}` + number);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        )}
        {/* Modal that is displayed when losing or winning */}
        <ModalAlert
          show={show}
          title={userWon ? "You WON!" : "You LOST!"}
          modalText={
            userWon
              ? "You remembered!!, would you like to try again?"
              : "Seems like you forgot, Would you like to try again?"
          }
          handleClose={handleClose}
          handleShow={handleShow}
          handleReject={handleReject}
          handleSuccess={handleSuccess}
        />
      </Container>
    </>
  );
}

export default NumbersGame;
