import axiosClient from "@config/axios";
import {
  getUserFailed,
  getUserSuccess,
  getUserStart,
  updateUserStart,
  updateUserSuccess,
  updateUserFailed,
  followOrtherUserStart,
  followOrtherUserSuccess,
  followOrtherUserFailed,
  getListUserFollowingStart,
  getListUserFollowingSuccess,
  getListUserFollowingFailed,
} from "../userSlice";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

//get current user
export const getUser = async (dispatch, id, accessToken) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get(`${baseUrl}/user/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(getUserSuccess(res));
  } catch (err) {
    console.log(err);
    dispatch(getUserFailed());
  }
};

//update current user
export const updateUser = async (
  dispatch,
  id,
  userInforUpdate,
  accessToken,
) => {
  dispatch(updateUserStart());
  try {
    await axiosClient.patch(`/user/update/${id}`, userInforUpdate, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(updateUserSuccess());
  } catch (err) {
    console.log(err);
    dispatch(updateUserFailed());
  }
};

//follow orther user
export const followOrtherUser = async (
  dispatch,
  friendId,
  yourId,
  accessToken,
) => {
  dispatch(followOrtherUserStart());
  try {
    await axiosClient.patch(`/user/interactive/${friendId}`, yourId, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(followOrtherUserSuccess());
  } catch (err) {
    console.log(err);
    dispatch(followOrtherUserFailed());
  }
};

// get list following

export const getListFollowing = async (dispatch, listIdUser, accessToken) => {
  dispatch(getListUserFollowingStart());
  try {
    const res = await axios.post(
      `${baseUrl}/user/getUserFollowing`,
      { follow: listIdUser },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    dispatch(getListUserFollowingSuccess(res));
  } catch (err) {
    console.log(err);
    dispatch(getListUserFollowingFailed());
  }
};
