import Button from "../UI/Button";

const StartGame = ({ changeScreen }) => {
  const handleClick = () => changeScreen("play");

  return (
    <div style={{ textAlign: "center", margin: "30px", padding: "50px" }}>
      <h1>Welcome to React Pong 😀😀</h1>
      <p>
        This Game's frontend was built with ReactJS. It communicates with a
        Golang backend via websockets. You're welcome to try it out and send
        your feedback
      </p>
      <h5>Game Play</h5>
      <div>
        <p>
          The game consists of two players. Player 1 uses the W & S keys to move
          up and down. Player 2 uses the Up & Down Arrow keys to move up and
          down. A player's score is incremented by 1 each time his/her pad
          connects with the ball. The first player to reach a target score of 50
          wins the game.
        </p>
      </div>

      <Button text="Start Game" onClick={handleClick} />
    </div>
  );
};

export default StartGame;
