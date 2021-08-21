import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUs = createAsyncThunk(
  "us/getUs",
  async (dispatch, getState) => {
    return await axios
      .get("http://ongapi.alkemy.org/api/members")
      .then((res) => res);
  }
);

const usSlice = createSlice({
  name: "us",
  initialState: {
    us: [],
    status: null,
  },
  extraReducers: {
    [getUs.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUs.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.status = "success";
      state.us = action.payload.data.data;
    },
    [getUs.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default usSlice.reducer;
