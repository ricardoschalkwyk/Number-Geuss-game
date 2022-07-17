import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="App-header">
        <h1>NUMBERS GAMER</h1>

        <p>
          The <strong>aim</strong> of the game is to remember the numbers that
          will be displayed when starting the game.
        </p>

        <p>
          When the timer runs out a few numbers will be displayed below the box.
          <br />
          <br />
          When these numbers are shown you will be able to enter your answer.
        </p>

        <p>
          This game will automatically start once you press{" "}
          <strong>Start Game</strong>.
        </p>
        <p>
          You wil have <strong>5 seconds</strong> to remember the numbers.
        </p>
        <div className="buttons">
          <Button
            variant="primary"
            onClick={() => {
              navigate("/new-game");
            }}
          >
            Start Game
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
