import { useDispatch } from "react-redux";
import Canvas from "./components/Canvas";
import { canvasActions } from "./store/canvas";

import { SOCKET_URL } from "./util/socket";
export const socket = new WebSocket(SOCKET_URL);

function App() {
  const dispatch = useDispatch();

  socket.onopen = () => socket.send("INIT");

  socket.onmessage = (response) => {
    const game = JSON.parse(response.data);
    console.log("Message received", game);
    dispatch(canvasActions.update(game));
  };

  socket.onclose = (event) => {
    console.log("Socket closed connection: ", event);
  };

  socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };

  const handleKeyDown = (e) => {
    console.log(e.key + " Pressed!");
    if (e.key.toUpperCase() === "W") return socket.send("P1_UP_PRESS");
    if (e.key.toUpperCase() === "S") return socket.send("P1_DOWN_PRESS");

    if (e.key === "Up" || e.key === "ArrowUp")
      return socket.send("P2_UP_PRESS");
    if (e.key === "Down" || e.key === "ArrowDown")
      return socket.send("P2_DOWN_PRESS");
  };

  const handleKeyUp = (e) => {
    console.log(e.key + " Released!");

    if (e.key.toUpperCase() === "W") return socket.send("P1_UP_RELEASE");
    if (e.key.toUpperCase() === "S") return socket.send("P1_DOWN_RELEASE");

    if (e.key === "Up" || e.key === "ArrowUp")
      return socket.send("P2_UP_RELEASE");
    if (e.key === "Down" || e.key === "ArrowDown")
      return socket.send("P2_DOWN_RELEASE");
  };

  return (
    <div
      className="App"
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex="0"
    >
      <h1 style={{ textAlign: "center" }}>React Pong</h1>

      <Canvas
        width="600"
        height="600"
        style={{ background: "#f0f0f0", borderRadius: "5px" }}
      />
    </div>
  );
}

export default App;
