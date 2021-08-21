/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DELETE, GET, POST, PUT } from '../../Services/privateApiService';

const URL = 'http://ongapi.alkemy.org/api/slides';

// fetch para recibir la lista completa de slice 
export const listgetSlides = (createAsyncThunk('Slices/get', async (id = null, thunkAPI) => {
	try {
		const resp = await GET(URL, id);
		return (resp.data.data);
    
	} catch (error) {
		thunkAPI.rejectWithValue([], error);
	}
}));

// Recibe un objeto 'data' con la informacion a enviar.
export const listpostSlides = (createAsyncThunk('Slices/post', async ( data, thunkAPI) => {
	try {
		const resp = await POST(URL, data);
		return (resp.data);
    
	} catch (error) {
		thunkAPI.rejectWithValue([], error);
	}
}));

export const deleteSlide = createAsyncThunk('slide/delete', async (id, thunkAPI) => {
	try {
		await DELETE(URL,id);
		//no necesito la respuesta , el id voy a usar para borrar respuesta en el reducer
		return id;
	} catch (error) {
		thunkAPI.rejectWithValue(error);
	}
});


export const updateSlide = createAsyncThunk('slide/update',async (values, GetThunkAPI) => {
    
	try {
		const resp = await PUT(URL,values.id,values);
		return resp.data;
	} catch (error) {
		return GetThunkAPI.rejectWithValue(error);
	}
},
);




export const getSlidesByid = createAsyncThunk('slide/Byid',async (id, GetThunkAPI) => {
	try {
		const resp = await GET(URL,id);
		return resp.data.data;
	} catch (error) {
		return GetThunkAPI.rejectWithValue([], error);
	}
}
);









export const slidesSlice = createSlice(

	{
		name: 'slidesSlice',
		initialState: {
			listSlides: [],
			status: null,
			slide:[]
		},
		extraReducers: {
			[listgetSlides.pending]: (state, action) => {
				state.status = 'loading';
			},
			[listgetSlides.fulfilled]: (state, action) => {
				state.status = 'success';
				state.listSlides = action.payload;
			},
			[listgetSlides.rejected]: (state, action) => {
				state.error = 'error';
			},
			[listpostSlides.pending]: (state, action) => {
				state.status = 'loading';
			},
			[listpostSlides.fulfilled]: (state, action) => {
				state.status = 'success';
				state.listSlides = [...state.listSlides,action.payload];
			},
			[listpostSlides.rejected]: (state, action) => {
				state.error = 'error';
			},
			[deleteSlide.pending]: (state) => {
				state.loading = true;
			},
    
			[deleteSlide.fulfilled]: (state,  action) => {
				state.loading = false;
				state.listSlides = state.listSlides.filter((slide) => slide.id !== action.payload.id);
			},
    
			[deleteSlide.rejected]: (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			},
			[updateSlide.pending]: (state, action) => {
				state.status = 'loading';
			},
			[updateSlide.fulfilled]: (state, action) => {
  
				state.status = 'success';
				state.listSlides= state.listSlides.map((slide)=>
					slide.id!==action.payload.id ? slide : action.payload
				);
			},
			[updateSlide.rejected]: (state, action) => {
				state.status = 'failed ';
			},
      
			[getSlidesByid.pending]: (state, action) => {
				state.status = 'loading';
			},
			[getSlidesByid.fulfilled]: (state, action) => {
				state.status = 'success';
				console.log(action.payload);
				state.slide = action.payload;
			},
			[getSlidesByid.rejected]: (state, action) => {
				state.status = 'failed';
			},
		}
	},

);


export default slidesSlice.reducer;

