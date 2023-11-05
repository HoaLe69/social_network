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
import { createPost } from "@redux/api-request/posts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MakePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.post.createPost.isFetching);
  const [description, setDescription] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    thumbnail: null,
    formData: {
      userId: currentUser?.id,
      photoUrl: currentUser?.avatar,
      description: description,
      displayName: currentUser?.displayName,
    },
  });

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    if (name === "image") {
      const file = e.target.files[0];
      setFormData((pre) => ({ ...pre, thumbnail: file }));
      previewImage(file);
    } else {
      setFormData((pre) => ({
        ...pre,
        formData: { ...pre.formData, [name]: value },
      }));
      setDescription(value);
    }
  };
  const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setPreviewSource(reader.result);
    };
  };
  const handleSubmit = () => {
    const form = new FormData();
    const blob = new Blob([JSON.stringify(formData.formData)], {
      type: "application/json",
    });
    form.append("thumbnail", formData.thumbnail);
    form.append("formData", blob);
    createPost(dispatch, navigate, form);
  };
  return (
    <Box>
      <Box as="header" textAlign={"center"} p={2}>
        <Heading fontSize="20px">Create New Posts</Heading>
      </Box>
      <Box>
        <Box display="flex" alignItems="center" gap="5px">
          <Avatar size="sm" src={currentUser?.avatar} />
          <Heading fontSize="15px">{currentUser?.displayName}</Heading>
        </Box>
        <Textarea
          mt={2}
          placeholder="What your on mind ?"
          bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.200")}
          resize="vertical"
          name="description"
          onChange={handleOnChange}
          value={description}
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
            onChange={handleOnChange}
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
        <Button
          isLoading={isLoading}
          loadingText="Upload"
          colorScheme="teal"
          px={8}
          onClick={handleSubmit}
        >
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default MakePost;
