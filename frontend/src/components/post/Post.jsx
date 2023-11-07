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
import route from "@config/route";
import PostAction from "./post-action";
import MenuPost from "../menu-post";
import { getCurrentPostId } from "@redux/postSlice";

const Post = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const {
    id,
    userId,
    cloudId,
    photoUrl,
    displayName,
    description,
    thumbnail,
    like,
    comments,
    isDetail,
  } = props;
  const handleShowFullPost = () => {
    dispatch(getCurrentPostId(id));
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
          <Box as="span" color={"grassTeal"}>
            <BsPatchCheckFill />
          </Box>
        </Link>
        {userId === currentUser?.id && (
          <Box ml="auto">
            <MenuPost id={id} cloudId={cloudId} />
          </Box>
        )}
      </HStack>
      <Box pl={2} pb={2}>
        <Text noOfLines={`${isDetail ? "none" : 3}`}>{description}</Text>
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
