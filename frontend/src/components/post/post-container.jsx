import { Box } from "@chakra-ui/react";
import Post from "./post";
import { postDt } from "../../samepleData";

const PostContainer = () => {
  return (
    <Box>
      {postDt?.map(function (data) {
        return (
          <Post
            key={data.id}
            id={data.id}
            photoUrl={data.photoUrl}
            displayName={data.displayName}
            status={data.status}
            follower={data.follower}
            thumbNail={data.thumbNail}
            like={data.like}
            comments={data.comments}
          />
        );
      })}
    </Box>
  );
};

export default PostContainer;
