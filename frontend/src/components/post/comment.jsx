import {
  Box,
  Avatar,
  Text,
  HStack,
  Heading,
  Input,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const Comment = ({ photoUrl, displayName, content }) => {
  return (
    <HStack p={1}>
      <Avatar src={photoUrl} size="sm" alt={displayName} />
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

const CommentWrap = () => {
  const fakeData = [
    {
      photoUrl:
        "https://hocdohoacaptoc.com/storage/2022/02/avata-dep-nam-2.jpg",
      displayName: "Xuan Huong",
      content: "Your equiment is beautifull",
    },

    {
      photoUrl:
        "https://hocdohoacaptoc.com/storage/2022/02/avata-dep-nam-2.jpg",
      displayName: "Xuan Huong",
      content: "Your equiment is beautifull",
    },
    {
      photoUrl:
        "https://hocdohoacaptoc.com/storage/2022/02/avata-dep-nam-2.jpg",
      displayName: "Xuan Huong",
      content: "Your equiment is beautifull",
    },
    {
      photoUrl:
        "https://hocdohoacaptoc.com/storage/2022/02/avata-dep-nam-2.jpg",
      displayName: "Xuan Huong",
      content: "Your equiment is beautifull",
    },
    {
      photoUrl:
        "https://hocdohoacaptoc.com/storage/2022/02/avata-dep-nam-2.jpg",
      displayName: "Xuan Huong",
      content: "Your equiment is beautifull",
    },
  ];
  return (
    <Box>
      {fakeData.map((data) => {
        return (
          <Comment
            photoUrl={data.photoUrl}
            displayName={data.displayName}
            content={data.content}
          />
        );
      })}
      <HStack>
        <Link>
          <Avatar src="https://hocdohoacaptoc.com/storage/2022/02/avata-dep-nam-2.jpg" />
        </Link>
        <Box
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          flex={1}
        >
          <Input
            placeholder="Enter Your Comment..."
            name="comment"
            id="comment"
          />
        </Box>
      </HStack>
    </Box>
  );
};
export default CommentWrap;
