import { useSelector } from "react-redux";
import { socket } from "../../util/socket";
import Button from "../UI/Button";

const GameOver = ({ changeScreen }) => {
  const congratsText = useSelector((state) => state.canvas.congratsText);
  const handleClick = () => {
    socket.send("INIT");
    changeScreen("play");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{congratsText}</h1>
      <Button onClick={handleClick} text="Play Again" />
    </div>
  );
};

export default GameOver;
