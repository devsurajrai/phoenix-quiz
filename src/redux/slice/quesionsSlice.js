import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async ({ encodedToken, level, category }) => {
    const config = {
      authorization: encodedToken,
    };
    const response = await axios.get(
      `/question?tags=${category}&lvl=${level}&length=5`,
      config
    );
    return response.data.questions;
  }
);
const initialState = {
  questions: [],
  status: "idle",
  error: "",
  questionsCategory: "",
  questionsLevel: "",
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestionsCategory: (state, action) => {
      state.questionsCategory = action.payload;
    },
    setQuestionsLevel: (state, action) => {
      state.questionsLevel = action.payload;
    },
  },
  extraReducers: {
    [getQuestions.fulfilled]: (state, action) => {
      state.questions = action.payload;
    },
    [getQuestions.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});
export const selectQuestionsData = (store) => store.questionsState;
export const { setQuestionsCategory, setQuestionsLevel } =
  questionsSlice.actions;
export { getQuestions };
export default questionsSlice.reducer;
