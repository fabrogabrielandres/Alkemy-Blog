import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import slidesSlice from "../features/Slides/slidesSlice";
import usReducer from "../features/Us/usSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    us: usReducer,
    slide:slidesSlice
  },
});
