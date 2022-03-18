import { socket } from "../util/socket";
import Button from "./UI/Button";

const GameActions = ({ changeScreen }) => {
  const handleQuit = () => {
    // Fake quit
    socket.send("INIT");
    changeScreen("start");
  };

  const handleReset = () => socket.send("INIT");

  return (
    <div style={{ textAlign: "center" }}>
      <Button text="Quit" onClick={handleQuit} />
      <Button text="Reset" onClick={handleReset} />
    </div>
  );
};

export default GameActions;
