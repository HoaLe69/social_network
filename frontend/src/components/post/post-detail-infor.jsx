import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Post from "./Post";

const PostInfor = () => {
  const postInfor = useSelector((state) => state.posts.currentPost);
  console.log(postInfor);
  return (
    <Box>
      <Post {...postInfor} isDetail />
    </Box>
  );
};

export default PostInfor;
