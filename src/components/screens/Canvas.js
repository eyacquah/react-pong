import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { socket } from "../../util/socket";
import { canvasActions } from "../../store/canvas";
import { draw } from "../../util/draw";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  const gameState = useRef(null);
  const dispatch = useDispatch();
  const FPS = 60;

  useEffect(() => {
    socket.onmessage = (response) => {
      const game = JSON.parse(response.data);
      dispatch(canvasActions.update(game));
      gameState.current = game;
    };
  }, [dispatch]);

  const renderFrame = () => {
    if (!gameState.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (socket.readyState === 1) socket.send("UPDATE");

    // Get the latest game state
    const { player1, player2, ball } = gameState.current;
    draw(ctx, player1, player2, ball);
  };

  const tick = useCallback(() => {
    if (!canvasRef.current) return;

    setTimeout(() => {
      renderFrame();
      requestIdRef.current = requestAnimationFrame(tick);
    }, 1000 / FPS);
  }, []);

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, [tick]);

  useEffect(() => {
    // Auto start game whenever the component mounts
    if (socket.readyState === 1) socket.send("UPDATE");
  }, []);

  return (
    <>
      <canvas ref={canvasRef} {...props} />
    </>
  );
};

export default Canvas;
