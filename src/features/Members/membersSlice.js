import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DELETE, GET, POST, PUT } from "../../Services/privateApiService";

const pathMembers = process.env.REACT_APP_API_MEMBERS;
const URL = `http://ongapi.alkemy.org/api${pathMembers}`;

export const listgetMembers = createAsyncThunk(
  "Members/get",
  async (id = null, thunkAPI) => {
    try {
      const resp = await GET(URL, id);
      return resp.data.data;
    } catch (error) {
      thunkAPI.rejectWithValue([], error);
    }
  }
);

export const listpostMembers = createAsyncThunk(
  "Members/post",
  async (data, thunkAPI) => {
    try {
      const resp = await POST(URL, data);
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue([], error);
    }
  }
);

export const deleteMember = createAsyncThunk(
  "member/delete",
  async (id, thunkAPI) => {
    try {
      await DELETE(URL, id);
      return id;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateMember = createAsyncThunk(
  "member/update",
  async (values, GetThunkAPI) => {
    try {
      const resp = await PUT(URL, values.id, values);
      return resp.data;
    } catch (error) {
      return GetThunkAPI.rejectWithValue(error);
    }
  }
);

export const getMembersByid = createAsyncThunk(
  "member/Byid",
  async (id, GetThunkAPI) => {
    try {
      const resp = await GET(URL, id);
      return resp.data.data;
    } catch (error) {
      return GetThunkAPI.rejectWithValue([], error);
    }
  }
);

export const membersSlice = createSlice({
  name: "membersSlice",
  initialState: {
    listMembers: [],
    status: null,
    member: [],
  },
  extraReducers: {
    [listgetMembers.pending]: (state, action) => {
      state.status = "loading";
    },
    [listgetMembers.fulfilled]: (state, action) => {
      state.status = "success";
      state.listMembers = action.payload;
    },
    [listgetMembers.rejected]: (state, action) => {
      state.error = "error";
    },
    [listpostMembers.pending]: (state, action) => {
      state.status = "loading";
    },
    [listpostMembers.fulfilled]: (state, action) => {
      state.status = "success";
      state.listMembers = [...state.listMembers, action.payload];
    },
    [listpostMembers.rejected]: (state, action) => {
      state.error = "error";
    },
    [deleteMember.pending]: (state) => {
      state.loading = true;
    },

    [deleteMember.fulfilled]: (state, action) => {
      state.loading = false;
      state.listMembers = state.listMembers.filter(
        (member) => member.id !== action.payload.id
      );
    },

    [deleteMember.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [updateMember.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateMember.fulfilled]: (state, action) => {
      state.status = "success";
      state.listMembers = state.listMembers.map((member) =>
        member.id !== action.payload.id ? member : action.payload
      );
    },
    [updateMember.rejected]: (state, action) => {
      state.status = "failed ";
    },

    [getMembersByid.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMembersByid.fulfilled]: (state, action) => {
      state.status = "success";
      state.member = action.payload;
    },
    [getMembersByid.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default membersSlice.reducer;
