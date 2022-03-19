import Button from "../UI/Button";

const StartGame = ({ changeScreen }) => {
  const handleClick = () => changeScreen("play");

  return (
    <div style={{ textAlign: "center", margin: "100px", padding: "50px" }}>
      <h1>Welcome to React Pong 😀😀</h1>
      <h2>React😍 + Go💪 via websockets⚡</h2>
      <h5>Game Play</h5>

      <p>
        Player 1 uses W & S keys to move up and down. Player 2 uses the Up &
        Down Arrow keys to move up and down. First to 10 wins.
      </p>

      <Button text="Start Game" onClick={handleClick} />
    </div>
  );
};

export default StartGame;
