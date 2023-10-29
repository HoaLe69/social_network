import {
  Link,
  Flex,
  Box,
  useColorModeValue,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart, AiOutlineMessage } from "react-icons/ai";
import FeedModal from "../modals/feed";

const PostAction = ({ isDetail, like, comments, id, handleShowFullPost }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const SubLink = ({ children }) => {
    return (
      <Link as={ReactRouterLink} to={`/post/${id}`}>
        {children}
      </Link>
    );
  };
  let Wrap = SubLink;
  if (isDetail) {
    Wrap = Box;
  }
  return (
    <>
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
          <Text lineHeight={1}>You and {like?.length} other</Text>
        </Box>
        <Box>
          <Text onClick={handleShowFullPost}>{comments.length} comments</Text>
        </Box>
      </Flex>
      <Flex px={10} align="center" justify="space-around" mt={1}>
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
        <Box
          flex={1}
          display={{ base: "none", lg: "block" }}
          onClick={handleShowFullPost}
        >
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
        <Box flex={1} display={{ lg: "none", base: "block" }}>
          <Wrap>
            <Flex
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
          </Wrap>
        </Box>
      </Flex>
    </>
  );
};

export default PostAction;
