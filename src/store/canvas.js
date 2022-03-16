const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  player1: {
    x: 0,
    y: 0,
    height: 0,
    width: 0,
    score: 0,
  },

  player2: {
    x: 0,
    y: 0,
    height: 0,
    width: 0,
    score: 0,
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
    },

    saveContext(state, action) {
      state.context = action.payload;
    },
  },
});

export const canvasActions = canvasSlice.actions;
export default canvasSlice.reducer;
