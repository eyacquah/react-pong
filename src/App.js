import { useEffect } from "react";
import { useSelector } from "react-redux";
import Canvas from "./components/Canvas";

import { SOCKET_URL } from "./util/socket";
export const socket = new WebSocket(SOCKET_URL);

function App() {
  const state = useSelector((state) => state.canvas);

  const { player1, player2 } = state;

  socket.onopen = () => socket.send("INIT");

  // socket.onmessage = (response) => {
  //   const game = JSON.parse(response.data);
  //   console.log("Message received", game);
  //   dispatch(canvasActions.update(game));
  // };

  socket.onclose = (event) => {
    console.log("Socket closed connection: ", event);
  };

  socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };

  const handleKeyDown = (e) => {
    if (e.key.toUpperCase() === "W") return socket.send("P1_UP_PRESS");
    if (e.key.toUpperCase() === "S") return socket.send("P1_DOWN_PRESS");

    if (e.key === "Up" || e.key === "ArrowUp")
      return socket.send("P2_UP_PRESS");
    if (e.key === "Down" || e.key === "ArrowDown")
      return socket.send("P2_DOWN_PRESS");
  };

  const handleKeyUp = (e) => {
    if (e.key.toUpperCase() === "W") return socket.send("P1_UP_RELEASE");
    if (e.key.toUpperCase() === "S") return socket.send("P1_DOWN_RELEASE");

    if (e.key === "Up" || e.key === "ArrowUp")
      return socket.send("P2_UP_RELEASE");
    if (e.key === "Down" || e.key === "ArrowDown")
      return socket.send("P2_DOWN_RELEASE");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <div
      className="App"
      // onKeyDown={handleKeyDown}
      // onKeyUp={handleKeyUp}
      // tabIndex="0"
    >
      <h1 style={{ textAlign: "center" }}>React Pong</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h5>{`Player 1: ${player1?.score || 0}`}</h5>
        <h5>{`Player 2: ${player2?.score || 0}`}</h5>
      </div>

      <Canvas width="900" height="500" style={{ border: "2px solid white" }} />
    </div>
  );
}

export default App;
