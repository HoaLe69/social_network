import { Box } from "@chakra-ui/react";
import Post from "./post";
import { getAllPost } from "@redux/api-request/posts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useInfinity from "../../hooks/useInfinityScroll";

const PostContainer = () => {
  const dispatch = useDispatch();
  const { page, lastPostRef, setHasmore } = useInfinity();
  const posts = useSelector((state) => state.post.allPost.posts);
  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;
  useEffect(() => {
    getAllPost(dispatch, accessToken, page, setHasmore);
  }, [page, accessToken, setHasmore]);

  console.log(posts);
  return (
    <Box>
      {posts?.map(function (post, index) {
        if (posts.length === index + 1) {
          return <Post key={post.id} ref={lastPostRef} {...post} />;
        }
        return <Post key={post.id} {...post} />;
      })}
    </Box>
  );
};

export default PostContainer;
