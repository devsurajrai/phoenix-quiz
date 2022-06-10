import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    incrementScore: (state) => {
      console.log("hello");
      state.score += 10;
    },
  },
});
export const selectScore = (store) => store.scoreState.score;
export const { incrementScore } = scoreSlice.actions;

export default scoreSlice.reducer;
