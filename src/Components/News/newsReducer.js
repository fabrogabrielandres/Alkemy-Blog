/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { newsRequests } from '../../Services/News/newsRequests';
export const requestNews = createAsyncThunk(
	'news/requestNews',
	newsRequests.get
);
export const newsSlice = createSlice({
	name: 'news',
	initialState: {
		news: [],
		status: null,
	},
	extraReducers: {
		[requestNews.pending]: (state, action) => {
			state.status = 'loading';
		},
		[requestNews.fulfilled]: (state, action) => {
			state.status = 'success';
			state.news = action.payload;
		},
		[requestNews.rejected]: (state, action) => {
			state.status = 'failed';
		},
	},
});

export default newsSlice.reducer;
