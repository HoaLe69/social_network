import {
  Box,
  Text,
  Link,
  Image,
  Avatar,
  Heading,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { AiOutlineLeft, AiFillDelete } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { showPost } from "@redux/postSlice";
import route from "@config/route";
import PostAction from "./post-action";
import MenuPost from "../menu-post";

const Post = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const dipatch = useDispatch();
  const {
    id,
    userId,
    cloudId,
    photoUrl,
    displayName,
    status,
    follower,
    thumbnail,
    like,
    comments,
    isDetail,
  } = props;
  const handleShowFullPost = () => {
    const post = {
      id,
      userId,
      cloudId,
      photoUrl,
      displayName,
      status,
      follower,
      thumbnail,
      like,
      comments,
      isDetail,
    };
    dipatch(showPost(post));
  };
  return (
    <Box>
      <HStack as="header" p={2} display="flex">
        {isDetail && (
          <Link display={{ lg: "none" }} as={ReactRouterLink} to={route.home}>
            <Box as="span">
              <AiOutlineLeft />
            </Box>
          </Link>
        )}
        <Link
          as={ReactRouterLink}
          to={`/profile/${userId}`}
          _hover={{ textDecoration: "none" }}
          display="flex"
          alignItems="center"
          gap="5px"
        >
          <Avatar src={photoUrl} size="sm" />
          <Heading as="h3" fontSize="14px">
            {displayName}
          </Heading>
          {follower?.length > 5 && (
            <Box as="span" color={"grassTeal"}>
              <BsPatchCheckFill />
            </Box>
          )}
        </Link>
        {userId === currentUser?.id && (
          <Box ml="auto">
            <MenuPost id={id} cloudId={cloudId} />
          </Box>
        )}
      </HStack>
      <Box pl={2} pb={2}>
        <Text noOfLines={`${isDetail ? "none" : 3}`}>{status}</Text>
      </Box>
      {thumbnail && (
        <Box overflow={"hidden"}>
          <Image
            maxH="600px"
            w="full"
            src={thumbnail}
            alt={displayName}
            objectFit={"cover"}
          />
        </Box>
      )}
      <PostAction
        isDetail={isDetail}
        id={id}
        like={like}
        comments={comments}
        handleShowFullPost={handleShowFullPost}
      />
    </Box>
  );
};

export default Post;
