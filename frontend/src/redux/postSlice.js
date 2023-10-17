import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    currentPost: {},
  },
  reducers: {
    showPost: (state, action) => {
      state.currentPost = { ...state.currentPost, ...action.payload };
    },
  },
});

export const { showPost } = postSlice.actions;
export default postSlice.reducer;
