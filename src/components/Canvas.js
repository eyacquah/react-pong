import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { socket } from "../App";

const canvas = {
  width: 600,
  height: 600,
};

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const state = useSelector((state) => state.canvas);
  const { player1, player2, ball } = state;

  useEffect(() => {
    if (canvasRef.current) {
      ctxRef.current = canvasRef.current.getContext("2d");
    }
  }, []);

  const draw = () => {
    if (ctxRef.current === null) return;

    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "purple";
    // Left Paddle
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height);

    // Right Paddle
    ctx.fillRect(player2.x, player2.y, player2.width, player2.height);

    //   Ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);

    ctx.fill();
  };

  const FPS = 60;

  const update = () => {
    setTimeout(() => {
      requestAnimationFrame(update); // get next farme
      draw();
      if (socket.readyState === 1) socket.send("UPDATE");
    }, 1000 / FPS);
  };

  useEffect(() => {
    update();
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
