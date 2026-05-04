import axiosClient from '../../config/axios'
import { getAllCommentFailed, getAllCommentStart } from '../commentSlice'

// get all comment
export const getAllComment = async (dispatch, postId, page = 0) => {
  dispatch(getAllCommentStart())
  try {
    const res = await axiosClient.get(`/comment/${postId}?page=${page}`)
    return res
    //    dispatch(getAllCommentSuccess(res))
  } catch (err) {
    console.log(err)
    dispatch(getAllCommentFailed())
  }
}

export const deleteComment = async () => {}
