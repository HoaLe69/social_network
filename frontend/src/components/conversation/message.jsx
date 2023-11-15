import { Flex, Avatar, Box, Text, useColorModeValue } from "@chakra-ui/react";
import formatTime from "../../util/timeago";

const Message = ({ photoUrl, userId, displayName, content, createAt }) => {
  console.log(formatTime(createAt));
  const userLoginId = JSON.parse(localStorage.getItem("user"))?.id;
  const WrapMessage = ({ children, isMyMess }) => {
    return !isMyMess ? (
      <Flex gap="5px" align="end" mt={3}>
        {children}
      </Flex>
    ) : (
      <Flex
        gap="5px"
        align="end"
        mt={3}
        justifyContent="end"
        flexDir="row-reverse"
      >
        {children}
      </Flex>
    );
  };
  const inactive = useColorModeValue("whiteAlpha.500", "whiteAlpha.200");
  const isMyMess = userLoginId === userId;
  return (
    <WrapMessage isMyMess={isMyMess}>
      <Box display="flex" gap="5px" maxW="50%">
        {!isMyMess && <Avatar src={photoUrl} alt={displayName} size="sm" />}
        <Box>
          <Box
            bg={isMyMess ? "grassTeal" : inactive}
            p={1}
            px={2}
            borderRadius="10px"
          >
            <Text>{content}</Text>
          </Box>
          <Text
            color={useColorModeValue("blackAlpha.800", "whiteAlpha.700")}
            fontSize="13px"
          >
            {createAt && formatTime(createAt)}
          </Text>
        </Box>
      </Box>
    </WrapMessage>
  );
};

export default Message;
