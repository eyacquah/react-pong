import { socket } from "./socket";

export const handleKeyDown = (e) => {
  if (e.key.toUpperCase() === "W") return socket.send("P1_UP_PRESS");
  if (e.key.toUpperCase() === "S") return socket.send("P1_DOWN_PRESS");

  if (e.key === "Up" || e.key === "ArrowUp") return socket.send("P2_UP_PRESS");
  if (e.key === "Down" || e.key === "ArrowDown")
    return socket.send("P2_DOWN_PRESS");
};

export const handleKeyUp = (e) => {
  if (e.key.toUpperCase() === "W") return socket.send("P1_UP_RELEASE");
  if (e.key.toUpperCase() === "S") return socket.send("P1_DOWN_RELEASE");

  if (e.key === "Up" || e.key === "ArrowUp")
    return socket.send("P2_UP_RELEASE");
  if (e.key === "Down" || e.key === "ArrowDown")
    return socket.send("P2_DOWN_RELEASE");
};
