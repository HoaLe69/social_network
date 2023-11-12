import {
  Box,
  HStack,
  Avatar,
  Heading,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState, useEffect, useMemo } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import InputComment from "./input-comment";
import socketService from "../../hooks/useWebSocket";
import axios from "axios";

const CommentItem = ({ photoUrl, displayName, content, userId }) => {
  return (
    <HStack p={1} px={2} alignItems="start">
      <Link as={ReactRouterLink} to={`/profile/${userId}`}>
        <Avatar src={photoUrl} size="sm" alt={displayName} />
      </Link>
      <Box
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={1}
        px={2}
        borderRadius="10px"
      >
        <Heading fontSize={"13px"}>{displayName}</Heading>
        <Text as="p">{content}</Text>
      </Box>
    </HStack>
  );
};

const Comment = ({ isOpen }) => {
  const [comments, setComments] = useState([]);
  const { sendMessage, disconnect, connect } = useMemo(
    () => socketService(setComments),
    [],
  );
  const postId = useSelector((state) => state.post?.currentPostInfor?.post?.id);
  const userLogin = JSON.parse(localStorage.getItem("user"));
  const baseUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (postId) {
      const getAllComment = async () => {
        try {
          const res = await axios.get(`${baseUrl}/comment/${postId}`, {
            headers: { Authorization: `Bearer ${userLogin?.accessToken}` },
          });
          setComments(res);
        } catch (err) {
          console.log(err);
        }
      };
      getAllComment();
    }
  }, [postId, userLogin.accessToken, baseUrl]);
  useEffect(() => {
    if (isOpen) {
      connect("comments", postId);
    }
    return () => disconnect();
  }, [isOpen, postId]);
  return (
    <Box position="relative">
      {comments?.map((comment, index) => {
        return (
          <CommentItem
            key={comment?.id || index}
            photoUrl={comment?.avatar}
            displayName={comment?.displayName}
            content={comment?.content}
            userId={comment?.userId}
          />
        );
      })}
      <HStack alignItems="center">
        <Link>
          <Avatar src={userLogin?.avatar} size="sm" />
        </Link>
        <Box
          mt={2}
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          alignItems="center"
          flex={1}
        >
          <InputComment postId={postId} sendMessage={sendMessage} />
        </Box>
      </HStack>
    </Box>
  );
};

export default Comment;
