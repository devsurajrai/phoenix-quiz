import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCategories = createAsyncThunk(
  "category/getCategory",
  async ({ encodedToken }) => {
    const config = {
      authorization: encodedToken,
    };
    const response = await axios.get("/category", {}, config);
    console.log("response", response.data.categories);
    return response.data.categories;
  }
);
const initialState = {
  categories: [],
  status: "idle",
  error: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
    [getCategories.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});
export const selectCategories = (store) => store.categoriesState.categories;
export { getCategories };
export default categorySlice.reducer;
