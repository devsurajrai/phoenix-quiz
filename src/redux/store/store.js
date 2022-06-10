import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "../slice/authSlice";
import categorySliceReducer from "../slice/categorySlice";
import questionsSliceReducer from "../slice/quesionsSlice";
import scoreSliceReducer from "../slice/scoreSlice";
export default configureStore({
  reducer: {
    auth: authSliceReducer,
    categoriesState: categorySliceReducer,
    questionsState: questionsSliceReducer,
    scoreState: scoreSliceReducer,
  },
});
