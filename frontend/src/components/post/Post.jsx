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
import { getCurrentPostId } from "@redux/postSlice";
import FeedModal from "../modals/feed";

const Post = (props) => {
  const userLogin = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const { isOpen, onClose, onOpen } = useDisclosure();
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
    <Box mb={4}>
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
          <Box fontSize="12px" p={1} color="white" bg="red.500" rounded="full">
            <AiFillHeart />
          </Box>
          <Text lineHeight={1}>You and {like && like?.length} other</Text>
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
};

export default Post;
