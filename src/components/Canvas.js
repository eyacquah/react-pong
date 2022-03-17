import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { socket } from "../App";
import { canvasActions } from "../store/canvas";
import { draw } from "../util/draw";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  const gameState = useRef(null);
  const dispatch = useDispatch();

  const renderFrame = () => {
    if (!gameState.current) return;

    const ctx = canvasRef.current.getContext("2d");
    // console.log(ctx);

    // Get the latest game state
    if (socket.readyState === 1) socket.send("UPDATE");

    const { player1, player2, ball } = gameState.current;
    draw(ctx, player1, player2, ball);
  };

  const FPS = 60;

  const tick = () => {
    if (!canvasRef.current) return;

    setTimeout(() => {
      renderFrame();
      requestIdRef.current = requestAnimationFrame(tick);
    }, 1000 / FPS);
  };

  useEffect(() => {
    socket.onmessage = (response) => {
      const game = JSON.parse(response.data);
      dispatch(canvasActions.update(game));

      gameState.current = game;
    };
  }, []);

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} {...props} />
    </>
  );
};

export default Canvas;
