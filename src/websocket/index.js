import { socket } from "../App";

const SOCKET_URL =
  process.env.NODE_ENV === "development"
    ? "ws://localhost:8080/ws"
    : "ws://localhost:8080/ws";

const sendInitMsg = () => JSON.stringify({ type: "INIT" });

const decodeMessage = (data) => {
  const msg = JSON.parse(data);

  switch (msg.type) {
    case "INIT":
      console.log(msg);
      console.log("Initial Game Params Received");
      break;

    case "ERROR":
      console.error(msg.error);
      alert("An error occurred. Refresh page to restart");
      socket.close();
      break;

    default:
      break;
  }
};

export { SOCKET_URL, sendInitMsg, decodeMessage };
