import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    currentPost: {},
    allPost: {
      isFetching: false,
      error: false,
      posts: [],
    },
    createPost: {
      isFetching: false,
      error: false,
      data: {},
    },
    deletePost: {
      isFetching: false,
      success: false,
      error: false,
    },
    getPostUser: {
      isFetching: false,
      error: false,
      posts: [],
    },
  },
  reducers: {
    getAllPostStart: (state) => {
      state.allPost.isFetching = true;
    },
    getAllPostSuccess: (state, action) => {
      state.allPost.isFetching = false;
      state.allPost.posts = action.payload;
    },
    getAllPostFailed: (state) => {
      state.allPost.error = true;
    },
    showPost: (state, action) => {
      state.currentPost = { ...state.currentPost, ...action.payload };
    },
    createPostStart: (state) => {
      state.createPost.isFetching = true;
    },
    createPostSuccess: (state, action) => {
      state.createPost.isFetching = false;
      state.createPost.data = action.payload;
    },
    createPostFailed: (state) => {
      state.createPost.error = true;
      state.createPost.isFetching = false;
    },
    deletePostStart: (state) => {
      state.deletePost.isFetching = true;
    },
    deletePostSuccess: (state) => {
      state.deletePost.isFetching = false;
      state.deletePost.error = false;
    },
    deletePostFailed: (state) => {
      state.deletePost.error = true;
      state.deletePost.isFetching = false;
    },
    getPostUserStart: (state) => {
      state.getPostUser.isFetching = true;
    },
    getPostUserSuccess: (state, action) => {
      state.getPostUser.isFetching = false;
      state.getPostUser.posts = action.payload;
      state.getPostUser.error = false;
    },
    getPostUserFalied: (state) => {
      state.getPostUser.isFetching = false;
      state.getPostUser.error = true;
    },
  },
});

export const {
  showPost,
  getAllPostStart,
  getAllPostFailed,
  getAllPostSuccess,
  createPostStart,
  createPostSuccess,
  createPostFailed,
  deletePostStart,
  deletePostFailed,
  deletePostSuccess,
  getPostUserStart,
  getPostUserFalied,
  getPostUserSuccess,
} = postSlice.actions;
export default postSlice.reducer;
