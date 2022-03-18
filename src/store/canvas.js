const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  screen: "start",
  congratsText: "",
  player1: {
    x: 0,
    y: 0,
    height: 0,
    width: 0,
    score: 0,
    hasWon: false,
  },

  player2: {
    x: 0,
    y: 0,
    height: 0,
    width: 0,
    score: 0,
    hasWon: false,
  },

  ball: {
    x: 0,
    y: 0,
    radius: 0,
  },

  context: null,
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    update(state, action) {
      const { ball, player1, player2 } = action.payload;

      state.player1 = player1;
      state.player2 = player2;
      state.ball = ball;

      if (player1.hasWon) {
        state.congratsText = "Player 1 Wins 🎉🎉";
        state.screen = "gameOver";
      } else if (player2.hasWon) {
        state.congratsText = "Player 2 Wins 🎉🎉";
        state.screen = "gameOver";
      } else {
        state.congratsText = "";
      }
    },

    changeScreen(state, action) {
      state.screen = action.payload;
    },
  },
});

export const canvasActions = canvasSlice.actions;
export default canvasSlice.reducer;
