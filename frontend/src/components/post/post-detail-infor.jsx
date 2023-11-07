import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./post";
import { getPostById } from "@redux/api-request/posts";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PostInfor = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const postInfor = useSelector((state) => state.post?.getPostById.post);
  const accessToken = JSON.parse(localStorage.getItem("user")).accessToken;
  const idPostFromStore = useSelector((state) => state.post?.currentPostId?.id);
  const idPost = pathname.split("/")[2] || idPostFromStore;
  useEffect(() => {
    if (accessToken) {
      getPostById(dispatch, idPost, accessToken);
    }
  }, [accessToken, dispatch, idPost]);
  console.log(postInfor);
  return (
    <Box>
      <Post {...postInfor} isDetail />
    </Box>
  );
};

export default PostInfor;
