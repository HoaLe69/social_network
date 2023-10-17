import LayoutNotHeader from "@layout/layout-not-header";
import { Box } from "@chakra-ui/react";
import PostInfor from "@components/post/post-detail-infor";
import CommentWrap from "@components/post/comment";

const DetailPost = () => {
  return (
    <LayoutNotHeader>
      <Box>
        <PostInfor />
        <CommentWrap />
      </Box>
    </LayoutNotHeader>
  );
};

export default DetailPost;
