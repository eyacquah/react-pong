export const SOCKET_URL =
  process.env.NODE_ENV === "development"
    ? "ws://localhost:8080/ws"
    : "wss://go-pong-server.uc.r.appspot.com/ws";
