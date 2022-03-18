const Scores = ({ player1, player2 }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>React Pong</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h5>{`Player 1: ${player1?.score || 0}`}</h5>
        <h5>{`Player 2: ${player2?.score || 0}`}</h5>
      </div>
    </>
  );
};

export default Scores;
