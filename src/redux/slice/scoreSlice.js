import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  currentGameQuestions: [],
  playerAnswers: [],
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.score += 10;
    },
    setQuestions: (state, action) => {
      state.currentGameQuestions = action.payload;
    },
    setPlayerAnswer: (state, action) => {
      state.playerAnswers = [...state.playerAnswers, action.payload];
    },
    setScoreToDefault: (state) => {
      state.score = 0;
      (state.currentGameQuestions = []), (state.playerAnswers = []);
    },
  },
});
export const selectScore = (store) => store.scoreState.score;

export const selectcurrentGameQuestions = (store) =>
  store.scoreState.currentGameQuestions;
export const selectplayerAnswers = (store) => store.scoreState.playerAnswers;
export const {
  incrementScore,
  setQuestions,
  setPlayerAnswer,
  setScoreToDefault,
} = scoreSlice.actions;

export default scoreSlice.reducer;
