import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createCategory, deleteCategory, editCategory, getCategories } from "../../Components/Categories/ServicesCategories";

export const fetchListCategories = createAsyncThunk(
  "categories/getList",
  async (empty, GetThunkAPI) => {
    try {
      const resp = await getCategories()
      return resp.data
    } catch (error) {
      return GetThunkAPI.rejectWithValue([], error)
    }
  }
);

export const getCategoriByid = createAsyncThunk(
  "categorie/Byid",
  async (id, GetThunkAPI) => {
    try {
      const resp = await getCategories(id)
      return resp
    } catch (error) {
      return GetThunkAPI.rejectWithValue([], error)
    }
  }
);


export const deleteCategorie = createAsyncThunk(
  "categories/delete",
  async (id, GetThunkAPI) => {
    try {
      await deleteCategory(id)
      return id
    } catch (error) {
      GetThunkAPI.rejectWithValue(error)
    }
  }
);

export const createCategorie = createAsyncThunk(
  "categories/create",
  async (values, GetThunkAPI) => {
    try {
      const resp = await createCategory(values)
      return resp
    } catch (error) {
      GetThunkAPI.rejectWithValue(error)
    }
  }
)

export const updateCategorie = createAsyncThunk(
  'categories/update',
  async (values, GetThunkAPI) => {
    try {
      const resp = await editCategory(values.id, values);
      return resp;
    } catch (error) {
      return GetThunkAPI.rejectWithValue(error);
    }
  },
);



const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    listCategories: [],
    categorie: [],
    status: null,
  },
  extraReducers: {
    [fetchListCategories.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchListCategories.fulfilled]: (state, action) => {
      state.status = "success";
      state.listCategories = action.payload.data;
    },
    [fetchListCategories.rejected]: (state, action) => {
      state.status = "failed";
    },

    [deleteCategorie.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteCategorie.fulfilled]: (state, action) => {

      state.status = "success";
      state.listCategories = state.listCategories.filter((categorie) => categorie.id !== action.payload)
    },
    [deleteCategorie.rejected]: (state, action) => {
      state.status = "failed ";
    },
    [createCategory.pending]: (state, action) => {
      state.status = "loading";
    },
    [createCategory.fulfilled]: (state, action) => {
      state.status = "success";
      state.listCategories = [...state.listCategories, action.payload]
    },
    [createCategory.rejected]: (state, action) => {
      state.status = "failed ";
    },

    [getCategoriByid.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCategoriByid.fulfilled]: (state, action) => {
      state.status = "success";
      state.categorie = action.payload.data.data
    },
    [getCategoriByid.rejected]: (state, action) => {
      state.status = "failed";
    },
    [updateCategorie.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateCategorie.fulfilled]: (state, action) => {

      state.status = "success";
      state.listCategories = state.listCategories.map((categorie) =>
        categorie.id !== action.payload.id ? categorie : action.payload
      )
    },
    [updateCategorie.rejected]: (state, action) => {
      state.status = "failed ";
    },

  },
});


export default categoriesSlice.reducer
