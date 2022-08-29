import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getBlogs = createAsyncThunk("blogs/getBlogs", async ({ id }) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
   
    return response.json();
  } catch (error) {
    toast.error(error);
  }
});



const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: {},
    loading: false,
  },
  extraReducers: {
    [getBlogs.pending]: (state, action) => {
      state.loading = true;
    },
    [getBlogs.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    },
    [getBlogs.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default blogSlice.reducer;
