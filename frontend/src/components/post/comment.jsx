import {
  Box,
  Avatar,
  Text,
  HStack,
  Heading,
  InputGroup,
  InputRightElement,
  Link,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

const Comment = ({ photoUrl, displayName, content }) => {
  return (
    <HStack p={1} alignItems="start">
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
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((res) => setData(res.slice(0, 20)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box>
      {data?.map((data, index) => {
        return (
          <Comment
            key={data.url}
            photoUrl={data.thumbnailUrl}
            displayName={`Hoa ${index}`}
            content={data.title}
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
          <InputGroup>
            <Input placeholder="Enter your comment..." name="comment" />
            <InputRightElement>
              <Box as="button">
                <BsFillSendFill />
              </Box>
            </InputRightElement>
          </InputGroup>
        </Box>
      </HStack>
    </Box>
  );
};
export default CommentWrap;
