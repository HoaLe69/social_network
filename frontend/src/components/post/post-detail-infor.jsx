import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Post from "./post";

const PostInfor = () => {
  const postInfor = useSelector((state) => state.posts.currentPost);
  return (
    <Box>
      <Post {...postInfor} isDetail />
    </Box>
  );
};

export default PostInfor;
