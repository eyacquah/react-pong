import Canvas from "./components/Canvas";

function App() {
  let socket = new WebSocket("ws://localhost:8080/ws");

  console.log("Attempting Websocket Connection");

  socket.onopen = () => {
    console.log("Successfully connected");
    socket.send("Hi from the client");
  };

  socket.onmessage = (msg) => console.log(msg.data);

  socket.onclose = (event) => {
    console.log("Socket closed connection: ", event);
  };

  socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };

  const handleKeyDown = (e) => {
    console.log(e.key + " Pressed!");
    if (e.key === "Up" || e.key === "ArrowUp") return socket.send("P2U");

    if (e.key === "Down" || e.key === "ArrowDown") return socket.send("P2D");

    if (e.key.toUpperCase() === "W") return socket.send("P1U");
    if (e.key.toUpperCase() === "S") return socket.send("P1D");
  };

  // const handleKeyUp = (e) => {
  //   if (e.key === "Up" || e.key === "ArrowUp") return socket.send("U");

  //   if (e.key === "W") return socket.send("W");

  // }

  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex="0">
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
