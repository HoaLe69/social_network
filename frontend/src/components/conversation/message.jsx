import { Flex, Avatar, Box, Text, useColorModeValue } from "@chakra-ui/react";

const formatDay = (createAt) => {
  const date = createAt.split("-");
  const day = date[0];
  const mouth = Number(date[1]);
  const year = date[2].slice(0, 4);
  console.log(day, mouth, year);
};

const Message = ({ photoUrl, userId, displayName, content, createAt }) => {
  if (createAt) console.log(formatDay(createAt));
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
      {!isMyMess && <Avatar src={photoUrl} alt={displayName} size="sm" />}
      <Box
        maxW="50%"
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
        {createAt}
      </Text>
    </WrapMessage>
  );
};

export default Message;
