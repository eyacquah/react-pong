const canvas = {
  width: 900,
  height: 500,
};

const draw = (ctx, player1, player2, ball) => {
  // console.log(ctx);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  // Left Paddle
  ctx.fillRect(player1.x, player1.y, player1.width, player1.height);

  // Right Paddle
  ctx.fillRect(player2.x, player2.y, player2.width, player2.height);

  //   Ball
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);

  ctx.fill();
};

export { draw };
