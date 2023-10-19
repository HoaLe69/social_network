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
        maxW="70vw"
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
  const sampleData = [
    {
      photoUrl:
        "https://i.pinimg.com/236x/dc/cb/ee/dccbee93d3b5334a002e7e5aa9d89b5a.jpg",
      content:
        "What's your name ???? My Yeti mic is mounted using a Blue Compass premium broadcast boom arm. By using the boom arm instead of a mic stand, it suppresses picking up the keyboard typing sounds when shooting my workflow videos.",
    },
    {
      content:
        "What's your name ???? My Yeti mic is mounted using a Blue Compass premium broadcast boom arm. By using the boom arm instead of a mic stand, it suppresses picking up the keyboard typing sounds when shooting my workflow videos.",
    },

    {
      photoUrl:
        "https://i.pinimg.com/236x/dc/cb/ee/dccbee93d3b5334a002e7e5aa9d89b5a.jpg",
      content:
        "What's your name ???? My Yeti mic is mounted using a Blue Compass premium broadcast boom arm. By using the boom arm instead of a mic stand, it suppresses picking up the keyboard typing sounds when shooting my workflow videos.",
    },
    {
      content:
        "What's your name ???? My Yeti mic is mounted using a Blue Compass premium broadcast boom arm. By using the boom arm instead of a mic stand, it suppresses picking up the keyboard typing sounds when shooting my workflow videos.",
    },
  ];
  return (
    <Box>
      <Flex
        as="header"
        gap="10px"
        align="center"
        borderBottomWidth={1}
        p={2}
        pos="fixed"
        right={0}
        left={0}
        top={0}
        zIndex={2}
        css={{ backdropFilter: "blur(10px)" }}
        bg={useColorModeValue("#ffffff40", "#20202380")}
      >
        <Link as={ReactRouterLink} to={route.message}>
          <Box fontSize="20px">
            <AiOutlineLeft />
          </Box>
        </Link>
        <Avatar
          src="https://i.pinimg.com/236x/dc/cb/ee/dccbee93d3b5334a002e7e5aa9d89b5a.jpg"
          alt="name"
        />
        <Heading as="h3" fontSize="16px">
          My Nguyen
        </Heading>
      </Flex>
      <Container
        maxW="container.lg"
        display="flex"
        flexDir="column"
        minH="100vh"
        justifyContent="flex-end"
        pt={16}
        pb={20}
      >
        {sampleData.map((data, index) => {
          return (
            <ConversationItem
              key={index}
              photoUrl={data.photoUrl}
              content={data.content}
            />
          );
        })}
      </Container>
      <Container
        pos="fixed"
        bottom={0}
        left={0}
        right={0}
        bg={useColorModeValue("#f0e7db", "#202023")}
        p={4}
        maxW={"container.lg"}
      >
        <Box bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}>
          <InputGroup>
            <Input placeholder="Message..." name="message" />
            <InputRightElement>
              <Box as="button">
                <BsFillSendFill />
              </Box>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Container>
    </Box>
  );
};

export default RoomConversation;
