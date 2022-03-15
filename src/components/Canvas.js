import { useEffect, useRef } from "react";
import { draw } from "../drawers/draw";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const p1 = { x: 10, y: 10, width: 10, height: 10 };
    const p2 = { x: 10, y: 10, width: 10, height: 10 };
    const ball = { x: 50, y: 50, radius: 10 };

    draw(context, p1, p2, ball);

    // context.fillStyle = "#000000";
    // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
