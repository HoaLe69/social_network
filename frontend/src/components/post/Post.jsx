import {
  Box,
  Text,
  Link,
  Image,
  Avatar,
  Heading,
  HStack,
  Flex,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsPatchCheckFill } from "react-icons/bs";
import MenuPost from "../menu-post";
import { AiOutlineHeart, AiFillHeart, AiOutlineMessage } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getCurrentPostInfor } from "@redux/postSlice";
import FeedModal from "../modals/feed";
import { reactPost } from "@redux/api-request/posts";
import { forwardRef, useState, memo } from "react";

const Post = forwardRef((props, ref) => {
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

  const userLogin = JSON.parse(localStorage.getItem("user"));
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLiked, setIsLike] = useState(() =>
    like ? like?.includes(userLogin?.id) : false,
  );
  const [liked, setLiked] = useState(like || []);
  const dispatch = useDispatch();

  const handleOnClickLike = () => {
    if (userLogin?.accessToken && id) {
      reactPost(userLogin?.accessToken, id, userLogin?.id);
    }
    if (isLiked) {
      setLiked([...liked].filter((likerId) => likerId !== userLogin?.id));
    } else setLiked([...liked, userLogin?.id]);
    setIsLike(!isLiked);
  };
  const handleShowFullPost = () => {
    dispatch(
      getCurrentPostInfor({
        id,
        userId,
        cloudId,
        photoUrl,
        displayName,
        description,
        thumbnail,
        like: liked,
        comments,
        isDetail,
      }),
    );
  };

  const colorReact = useColorModeValue("#1a202c", "#ffffff");

  const showRectPost = () => {
    const quantity = liked?.length;
    if (quantity === 0) return "0";
    else {
      if (quantity === 1 && isLiked) return "you";
      else if (isLiked) return `you and ${quantity - 1} other`;
      return `${quantity} other`;
    }
  };
  return (
    <Box mb={4} ref={ref}>
      <HStack as="header" p={2} display="flex">
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
        {userId === userLogin?.id && (
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
      <Flex
        py={2}
        px={7}
        justify="space-between"
        borderBottom="1px"
        borderBottomColor={useColorModeValue(
          "blackAlpha.200",
          "whiteAlpha.200",
        )}
      >
        <Box display="flex" alignItems="center" gap="5px">
          <Box fontSize="12px" p={1} color="white" bg="pink.400" rounded="full">
            <AiFillHeart />
          </Box>
          <Text lineHeight={1}>{showRectPost()}</Text>
        </Box>
        <Box>
          <Text onClick={handleShowFullPost}>{comments} comments</Text>
        </Box>
      </Flex>
      <Flex
        px={10}
        align="center"
        justify="space-around"
        mt={1}
        borderBottom="1px"
        borderBottomColor={useColorModeValue(
          "blackAlpha.200",
          "whiteAlpha.200",
        )}
      >
        <Flex
          flex={1}
          alignItems="center"
          gap={1}
          justify="center"
          py={1}
          rounded="5px"
          _hover={{ bg: useColorModeValue("whiteAlpha.500", "whiteAlpha.200") }}
          cursor="pointer"
          onClick={handleOnClickLike}
          color={isLiked ? "pink.400" : colorReact}
        >
          <Box lineHeight={1}>
            <AiOutlineHeart />
          </Box>
          Like
        </Flex>
        <Box flex={1} onClick={handleShowFullPost}>
          <Flex
            onClick={onOpen}
            cursor="pointer"
            py={1}
            rounded="5px"
            _hover={{
              bg: useColorModeValue("whiteAlpha.500", "whiteAlpha.200"),
            }}
            flex={1}
            alignItems="center"
            gap={2}
            justify="center"
          >
            <AiOutlineMessage />
            Comments
          </Flex>
          <FeedModal isOpen={isOpen} onClose={onClose} />
        </Box>
      </Flex>
    </Box>
  );
});

export default memo(Post);
