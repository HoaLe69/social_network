import { Box } from "@chakra-ui/react";
import Post from "./post";
import { getAllPost } from "@redux/api-request/posts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const PostContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.allPost.posts);
  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;
  useEffect(() => {
    getAllPost(dispatch, accessToken);
  }, [dispatch, accessToken]);
  return (
    <Box>
      {posts?.map(function (post) {
        return (
          <Post
            key={post.id}
            id={post.id}
            cloudId={post.cloudinaryId}
            userId={post.userId}
            photoUrl={post.photoUrl}
            displayName={post.displayName}
            description={post.description}
            follower={post.follower}
            thumbnail={post.thumbnail}
            like={post.like}
            comments={post.comments}
          />
        );
      })}
    </Box>
  );
};

export default PostContainer;
