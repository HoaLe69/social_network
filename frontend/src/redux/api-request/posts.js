import axiosClient from "@config/axios";
import axios from "axios";
import {
  createPostStart,
  createPostSuccess,
  createPostFailed,
  getAllPostStart,
  getAllPostSuccess,
  getAllPostFailed,
  deletePostSuccess,
  deletePostFailed,
  deletePostStart,
  getPostUserStart,
  getPostUserSuccess,
  getPostUserFalied,
  getPostByIdStart,
  getPostByIdFailed,
  getPostByIdSuccess,
  getAllPostUserStart,
  getAllPostUserSuccess,
  getAllPostUserFailed,
} from "../postSlice";
import { config } from "./configAxiosHeader";

const baseUrl = process.env.REACT_APP_API_URL;

//create post
export const createPost = async (dispatch, navigate, formData) => {
  dispatch(createPostStart());
  try {
    const res = await axios.post(`${baseUrl}/post/upload`, formData, config);
    console.log(res);
    dispatch(createPostSuccess(res));
  } catch (err) {
    console.log(err);
    dispatch(createPostFailed());
  }
};

//get all post
export const getAllPost = async (dispatch, accessToken, page, setHasmore) => {
  dispatch(getAllPostStart());
  try {
    const res = await axios.get(`${baseUrl}/post/all-post?page=${page}`, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    setHasmore(res.content.length > 0);
    dispatch(getAllPostSuccess(res));
  } catch (err) {
    console.log(err);
    dispatch(getAllPostFailed());
  }
};

//deletePost
export const deletePost = async (dispatch, id, cloudId, accessToken) => {
  dispatch(deletePostStart());
  try {
    await axios.delete(`${baseUrl}/post/delete/${id}/${cloudId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(deletePostSuccess(id));
  } catch (err) {
    dispatch(deletePostFailed());
  }
};

// get all post of user
export const getAllPostUser = async (dispatch, id, accessToken) => {
  dispatch(getPostUserStart());
  try {
    const res = await axios.get(`${baseUrl}/post/all-post-user/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(getPostUserSuccess(res));
  } catch (err) {
    console.log(err);
    dispatch(getPostUserFalied());
  }
};

// get  post by id
export const getPostById = async (dispatch, id, accessToken) => {
  dispatch(getPostByIdStart());
  try {
    const res = await axios.get(`${baseUrl}/post/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(getPostByIdSuccess(res));
  } catch (err) {
    console.log(err);
    dispatch(getPostByIdFailed());
  }
};

// react post
export const reactPost = async (accessToken, postId, userId) => {
  try {
    axios.patch(
      `${baseUrl}/post/react/${postId}/${userId}`,
      {},
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
  } catch (err) {
    console.log(err);
  }
};

// get all post from userFollowing
// get list following

export const getAllPostFromUserFollowing = async (
  dispatch,
  listIdUser,
  accessToken,
) => {
  dispatch(getAllPostUserStart());
  try {
    const res = await axios.post(
      `${baseUrl}/post/all-post-user-following`,
      { list: listIdUser },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    console.log(res);
    dispatch(getAllPostUserSuccess(res));
  } catch (err) {
    console.log(err);
    dispatch(getAllPostUserFailed());
  }
};
