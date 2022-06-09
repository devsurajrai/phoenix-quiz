import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "../slice/authSlice";

export default configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});
