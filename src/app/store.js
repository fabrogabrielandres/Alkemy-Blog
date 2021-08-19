import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import membersSlice from "../features/Members/membersSlice";
import slidesSlice from "../features/Slides/slidesSlice";
import usReducer from "../features/Us/usSlice";
import newsReducer from "../Components/News/newsReducer";

export default configureStore({
  reducer: {
    counter: counterReducer,
    members: membersSlice,
    us: usReducer,
    news: newsReducer,
    slide: slidesSlice,
  },
});
