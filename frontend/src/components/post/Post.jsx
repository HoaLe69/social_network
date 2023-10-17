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
import {
  AiOutlineLeft,
  AiOutlineHeart,
  AiOutlineMessage,
} from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { showPost } from "@redux/postSlice";
import route from "@config/route";

const DesBox = styled.span`
  display: flex;
  align-items: center;
  > p {
    margin-left: 5px;
  }
  > span {
    font-size: 24px;
  }
  + span {
    margin-left: 10px;
  }
`;

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
  const SubLink = ({ children }) => {
    return (
      <Link
        as={ReactRouterLink}
        to={`/home/post/${id}`}
        _hover={{ textDecoration: "none" }}
      >
        {children}
      </Link>
    );
  };
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
    console.log(1);
    dipatch(showPost(post));
  };
  let Wrap = SubLink;
  if (isDetail) {
    Wrap = Box;
  }
  return (
    <Box>
      <HStack as="header" p={2} display="flex">
        {isDetail && (
          <Link as={ReactRouterLink} to={route.home}>
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
      <Box borderRadius={"10px"} overflow={"hidden"}>
        <Image src={thumbNail} alt={displayName} objectFit={"cover"} />
      </Box>
      <HStack p={2}>
        <DesBox>
          <Box as="span">
            <AiOutlineHeart />
          </Box>
          <Text as="p">{like.length}</Text>
        </DesBox>
        <Wrap>
          <DesBox onClick={() => !isDetail && handleShowFullPost()}>
            <Box as="span">
              <AiOutlineMessage />
            </Box>
            <Text as="p">{comments.length}</Text>
          </DesBox>
        </Wrap>
      </HStack>
    </Box>
  );
};

export default Post;
