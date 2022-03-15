export const drawPaddles = (context, width, height) => {
  context.fillStyle = "coral";

  // Left Paddle
  context.fillRect(20, height / 2 - 35, 5, 70);

  // Right Paddle
  context.fillRect(width - 20, height / 2 - 35, 5, 70);
};
