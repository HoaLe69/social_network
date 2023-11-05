import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  Avatar,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import images from "../../assets";
import { useFormik } from "formik";
import { updateUser } from "@redux/api-request/user";

const ListAvatar = ({ handleChooseImage }) => {
  return (
    <HStack justifyContent="center" gap="20px">
      {Object.keys(images).map((image) => {
        return (
          image !== "auth" && (
            <Avatar
              key={image}
              onClick={() => handleChooseImage(images[image])}
              cursor="pointer"
              _hover={{
                boxShadow: "1px 1px 4px 4px rgba(255 , 255 ,255 , 0.7)",
              }}
              src={images[image]}
            />
          )
        );
      })}
    </HStack>
  );
};

const EditProfileModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const userClient = JSON.parse(localStorage.getItem("user"));
  const currentUser = useSelector((state) => state.user.users?.currentUser);
  const isLoading = useSelector((state) => state.user.updateUser.isFetching);
  const [previewSource, setPreviewSource] = useState(undefined);
  const formik = useFormik({
    initialValues: {
      avatar: currentUser?.avatar,
      displayName: "",
      about: "",
    },
    onSubmit: (data) => {
      updateUser(
        dispatch,
        currentUser?.id,
        {
          ...data,
          avatar: previewSource,
        },
        userClient?.accessToken,
      );
      const userStorage = {
        ...userClient,
        avatar: previewSource,
        displayName: data.displayName,
        about: data.about,
      };
      localStorage.setItem("user", JSON.stringify(userStorage));
      if (!isLoading) {
        onClose();
      }
    },
  });
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading fontSize="20px">Edit your profile</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <Popover>
              <PopoverTrigger>
                <Avatar
                  src={previewSource ? previewSource : currentUser?.avatar}
                  cursor="pointer"
                  size="xl"
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Choose avatar</PopoverHeader>
                <PopoverBody>
                  <ListAvatar handleChooseImage={setPreviewSource} />
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Heading fontSize="15px">{currentUser?.displayName}</Heading>
          </VStack>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel htmlFor="displayName">Display name</FormLabel>
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.displayName}
                  type="text"
                  name="displayName"
                  id="displayName"
                  placeholder="Enter your display name..."
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="about">Bio</FormLabel>
                <Textarea
                  onChange={formik.handleChange}
                  value={formik.values.about}
                  type="text"
                  name="about"
                  id="about"
                  placeholder="Enter your about..."
                />
              </FormControl>
            </Stack>
            <ModalFooter>
              <Button
                type="submit"
                isLoading={isLoading}
                loadingText="saving"
                colorScheme="teal"
                mr={3}
              >
                Save
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditProfileModal;
