const draw = (context, player1, player2, ball) => {
  context.fillStyle = "purple";

  // Left Paddle
  context.fillRect(player1.x, player1.y, player1.width, player1.height);

  // Right Paddle
  context.fillRect(player2.x, player2.y, player2.width, player2.height);

  //   Ball
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);

  context.fill();

  //   requestAnimationFrame(draw);
};

export { draw };
