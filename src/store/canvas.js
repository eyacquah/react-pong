const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  player1X: 10,
  player1Y: 20,
  player1Height: 25,
  player1Width: 20,

  player2X: 50,
  player2Y: 50,
  player2Height: 25,
  player2Width: 20,

  ballRadius: 20,
  ballX: 100,
  ballY: 100,
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    update(state, action) {
      const { payload } = action;

      state.player1X = payload.p1x;
    },
  },
});

export const canvasActions = canvasSlice.actions;
export default canvasSlice.reducer;
