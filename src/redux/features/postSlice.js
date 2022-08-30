import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const response = await fetch(POSTS_URL);
    toast("The response status code is " + response.status);
    return response.json();
  } catch (error) {
    toast.error(error);
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
