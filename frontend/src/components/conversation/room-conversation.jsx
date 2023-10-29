import {
  Container,
  Box,
  Flex,
  Avatar,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import { Link as ReactRouterLink } from "react-router-dom";
import route from "@config/route";
import { COLOR_THEME } from "../../constant";
import { chatsDt } from "../../samepleData";

const ConversationItem = ({ photoUrl, displayName, content }) => {
  const WrapMessage = ({ children }) => {
    return photoUrl ? (
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
  return (
    <WrapMessage>
      {photoUrl && <Avatar src={photoUrl} alt={displayName} size="sm" />}
      <Box
        maxW="70%"
        bg={photoUrl ? inactive : "grassTeal"}
        p={1}
        px={2}
        borderRadius="10px"
      >
        <Text>{content}</Text>
      </Box>
    </WrapMessage>
  );
};

const RoomConversation = () => {
  return (
    <Box display="flex" h={{ base: "100vh", lg: "full" }} flexDir="column">
      <Flex
        as="header"
        gap="10px"
        align="center"
        borderBottomWidth={1}
        borderColor={COLOR_THEME.BORDER}
        py={2}
        css={{ backdropFilter: "blur(10px)" }}
        bg={useColorModeValue("#ffffff40", "#20202380")}
      >
        <Link
          display={{ lg: "none", base: "block" }}
          as={ReactRouterLink}
          to={route.message}
        >
          <Box fontSize="20px">
            <AiOutlineLeft />
          </Box>
        </Link>
        <Avatar ml={2} size="sm" alt="name" />
        <Heading as="h3" fontSize="16px">
          My Nguyen
        </Heading>
      </Flex>
      <Box
        flex="1"
        sx={{ height: "calc(100% - 56px)" }}
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
      >
        <Box p={2} maxH="100%" overflowY="auto">
          {chatsDt.map((data, index) => {
            return (
              <ConversationItem
                key={index}
                photoUrl={data.photoUrl}
                content={data.content}
              />
            );
          })}
        </Box>
        <Box py={2} bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.100")}>
          <InputGroup>
            <Input placeholder="Message..." name="message" />
            <InputRightElement>
              <Box as="button">
                <BsFillSendFill />
              </Box>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default RoomConversation;
