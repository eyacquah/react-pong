const SOCKET_URL =
  process.env.NODE_ENV === "development"
    ? "ws://localhost:8080/ws"
    : "wss://go-pong-server.uc.r.appspot.com/ws";

export const socket = new WebSocket(SOCKET_URL);

socket.onopen = () => socket.send("INIT");

socket.onclose = (event) => {
  console.log("Socket closed connection: ", event);
};

socket.onerror = (error) => {
  console.log("Socket Error: ", error);
};
