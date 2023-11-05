import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: {
      isFetching: false,
      currentUser: null,
      error: false,
    },
    updateUser: {
      isFetching: false,
      error: false,
    },
    followOrtherUser: {
      isFetching: false,
      error: false,
    },
    getListUserFollowing: {
      isFetching: false,
      error: false,
      listFollowing: [],
    },
  },
  reducers: {
    getUserStart: (state) => {
      state.users.isFetching = true;
      state.users.error = false;
    },
    getUserSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.currentUser = action.payload;
      state.users.error = false;
    },
    getUserFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
    updateUserStart: (state) => {
      state.updateUser.isFetching = true;
    },
    updateUserSuccess: (state) => {
      state.updateUser.isFetching = false;
      state.updateUser.error = false;
    },
    updateUserFailed: (state) => {
      state.updateUser.isFetching = false;
      state.updateUser.error = true;
    },
    followOrtherUserStart: (state) => {
      state.followOrtherUser.isFetching = true;
    },
    followOrtherUserSuccess: (state) => {
      state.followOrtherUser.isFetching = false;
      state.followOrtherUser.error = false;
    },
    followOrtherUserFailed: (state) => {
      state.followOrtherUser.isFetching = false;
      state.followOrtherUser.error = true;
    },
    getListUserFollowingStart: (state) => {
      state.getListUserFollowing.isFetching = true;
    },
    getListUserFollowingSuccess: (state, action) => {
      state.getListUserFollowing.isFetching = false;
      state.getListUserFollowing.listFollowing = action.payload;
      state.getListUserFollowing.error = false;
    },
    getListUserFollowingFailed: (state) => {
      state.getListUserFollowing.isFetching = false;
      state.getListUserFollowing.error = true;
    },
  },
});

export const {
  getUserStart,
  getUserSuccess,
  getUserFailed,
  updateUserFailed,
  updateUserStart,
  updateUserSuccess,
  followOrtherUserStart,
  followOrtherUserFailed,
  followOrtherUserSuccess,
  getListUserFollowingStart,
  getListUserFollowingSuccess,
  getListUserFollowingFailed,
} = userSlice.actions;

export default userSlice.reducer;
