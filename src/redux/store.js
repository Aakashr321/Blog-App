import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./features/postSlice";
import BlogReducer from "./features/blogSlice";

export default configureStore({
  reducer: {
    post: PostReducer,
    blogs: BlogReducer,
  },
});
