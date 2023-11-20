import {
  Box,
  HStack,
  Avatar,
  Heading,
  Text,
  Link,
  useColorModeValue,
  IconButton,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState, useEffect, useMemo } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import InputComment from "./input-comment";
import socketService from "../../hooks/useWebSocket";
import axios from "axios";
import { BsThreeDots } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import formatTime from "../../util/timeago";

const CommentItem = ({
  photoUrl,
  displayName,
  userOfPost,
  content,
  userId,
  id,
  createAt,
  setComments,
  postId,
}) => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const userLogin = JSON.parse(localStorage.getItem("user"));
  const handleDeleteComent = async () => {
    try {
      await axios.delete(`${baseUrl}/comment/${id}/${postId}`, {
        headers: { Authorization: `Bearer ${userLogin?.accessToken}` },
      });
      setComments((pre) => pre.filter((comment) => comment.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
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
      <Box>
        {(userLogin?.id === userId || userLogin?.id === userOfPost) && (
          <Menu placement="bottom-end">
            <MenuButton
              size="sm"
              rounded="full"
              icon={<BsThreeDots />}
              as={IconButton}
            />
            <MenuList>
              <MenuItem
                leftIcon={<AiFillDelete />}
                loadingText="delete"
                as={Button}
                onClick={handleDeleteComent}
              >
                delete
              </MenuItem>
            </MenuList>
          </Menu>
        )}
        <Text
          fontSize="12px"
          color={useColorModeValue("blackAlpha.800", "whiteAlpha.700")}
        >
          {formatTime(createAt)}
        </Text>
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
  const userOfPost = useSelector(
    (state) => state.post?.currentPostInfor?.post?.userId,
  );
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
            id={comment?.id}
            userOfPost={userOfPost}
            photoUrl={comment?.avatar}
            displayName={comment?.displayName}
            content={comment?.content}
            userId={comment?.userId}
            createAt={comment?.createAt}
            setComments={setComments}
            postId={postId}
          />
        );
      })}
      <HStack alignItems="center" px={2}>
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
