import {
  Box,
  Text,
  Link,
  Image,
  Avatar,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { showPost } from "@redux/postSlice";
import route from "@config/route";
import PostAction from "./post-action";

const Post = (props) => {
  const dipatch = useDispatch();
  const {
    id,
    photoUrl,
    displayName,
    status,
    follower,
    thumbNail,
    like,
    comments,
    isDetail,
  } = props;
  const handleShowFullPost = () => {
    const post = {
      id,
      photoUrl,
      displayName,
      status,
      follower,
      thumbNail,
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
          to={`/profile/${displayName}`}
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
      </HStack>
      <Box pl={2} pb={2}>
        <Text noOfLines={`${isDetail ? "none" : 3}`}>{status}</Text>
      </Box>
      <Box overflow={"hidden"}>
        <Image src={thumbNail} alt={displayName} objectFit={"cover"} />
      </Box>
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
