import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call for logging in
export const loginUser = createAsyncThunk(
  "login/login-user",
  async ({ email, password }) => {
    const response = axios.post("/user/login", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.encodedToken);
    return response.data.encodedToken;
  }
);
// api call for creating user
export const createUser = createAsyncThunk(
  "auth/create-user",
  async ({ email, password, firstName, lastName }) => {
    const response = axios.post("/user/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    localStorage.setItem("token", response.data.encodedToken);
    console.log(response.data);
    return response.data;
  }
);

const token = localStorage.getItem("token");
const encodedToken = token ? token : null;
const isUserLoggedIn = token ? true : false;
const initialState = {
  isUserLoggedIn,
  encodedToken,
  status: "idle",
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
    setAuthToDefault: () => {
      return {
        isUserLoggedIn: false,
        encodedToken: "",
        user: {},
        status: "idle",
        error: null,
      };
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.status = "finished";
      state.isUserLoggedIn = true;
      state.encodedToken = action.payload.encodedToken;
      state.user = action.payload.user;
    },
    [loginUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },

    [createUser.fulfilled]: (state, action) => {
      state.status = "finished";
      state.isUserLoggedIn = true;
      state.encodedToken = action.payload.encodedToken;
      state.user = action.payload.user;
    },
    [createUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
export const { setIsLoggedIn, setAuthToDefault } = authSlice.actions;
export const selectAuthInfo = (store) => store.auth;
export default authSlice.reducer;
