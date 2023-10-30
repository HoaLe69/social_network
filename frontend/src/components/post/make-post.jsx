import {
  Box,
  Heading,
  Button,
  Textarea,
  Input,
  FormLabel,
  Image,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";

const MakePost = () => {
  const [previewSource, setPreviewSource] = useState();
  const handleOnChangeFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setPreviewSource(reader.result);
    };
  };

  return (
    <Box>
      <Box as="header" textAlign={"center"} p={2}>
        <Heading fontSize="20px">Create New Posts</Heading>
      </Box>
      <Box>
        <Box display="flex" alignItems="center" gap="5px">
          <Avatar size="sm" />
          <Heading fontSize="15px">VanHoa</Heading>
        </Box>
        <Textarea
          mt={2}
          placeholder="What your on mind ?"
          bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.200")}
          resize="vertical"
          name="description"
        />
        <FormLabel
          mt={2}
          htmlFor="input-file"
          display="inline-flex"
          alignItems="center"
          gap="5px"
          p={2}
          bg="teal"
          borderRadius="10px"
          cursor="pointer"
          color={useColorModeValue("whiteAlpha.900", "gray.900")}
        >
          Upload
          <MdOutlineCloudUpload />
          <Input
            id="input-file"
            type="file"
            name="image"
            display="none"
            onChange={handleOnChangeFile}
          />
        </FormLabel>
        <Box display="flex" justifyContent="center">
          <Image
            src={previewSource}
            boxSize="xs"
            loading="eager"
            objectFit="cover"
          />
        </Box>
      </Box>
      <Box pt="3" display="flex" justifyContent="center">
        <Button colorScheme="teal" px={8}>
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default MakePost;
