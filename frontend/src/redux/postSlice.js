import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    currentPostId: {
      id: undefined,
    },
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
    getPostById: {
      isFetching: false,
      error: false,
      post: {},
    },
  },
  reducers: {
    getCurrentPostId: (state, action) => {
      state.currentPostId.id = action.payload;
    },
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
    getPostByIdStart: (state) => {
      state.getPostById.isFetching = true;
    },
    getPostByIdSuccess: (state, action) => {
      state.getPostById.isFetching = false;
      state.getPostById.post = action.payload;
      state.getPostById.error = false;
    },
    getPostByIdFailed: (state) => {
      state.getPostById.isFetching = false;
      state.getPostById.error = true;
    },
  },
});

export const {
  getCurrentPostId,
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
  getPostByIdStart,
  getPostByIdFailed,
  getPostByIdSuccess,
} = postSlice.actions;
export default postSlice.reducer;
