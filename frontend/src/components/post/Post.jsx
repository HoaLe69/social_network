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
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
import styled from "@emotion/styled";
import { useState } from "react";

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
  const [showPostDetail, setShowPostDetail] = useState(false);
  const {
    id,
    photoUrl,
    displayName,
    status,
    follower,
    thumbNail,
    like,
    comments,
  } = props;
  return (
    <Box>
      <Box as="header" p={2}>
        <Link
          as={ReactRouterLink}
          to={`/profile/${displayName}`}
          _hover={{ textDecoration: "none" }}
        >
          <HStack>
            <Avatar src={photoUrl} size="sm" />
            <Heading as="h3" fontSize="14px">
              {displayName}
            </Heading>
            {follower.length > 5 && (
              <Box as="span" color={"grassTeal"}>
                <BsPatchCheckFill />
              </Box>
            )}
          </HStack>
        </Link>
      </Box>
      <Box pl={2} pb={2}>
        <Text noOfLines={3}>{status}</Text>
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

        <Link
          as={ReactRouterLink}
          to={`/post/${id}`}
          _hover={{ textDecoration: "none" }}
        >
          <DesBox onClick={() => setShowPostDetail(!showPostDetail)}>
            <Box as="span">
              <AiOutlineMessage />
            </Box>
            <Text as="p">{comments.length}</Text>
          </DesBox>
        </Link>
      </HStack>
    </Box>
  );
};

export default Post;
