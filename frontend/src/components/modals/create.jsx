import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { COLOR_THEME } from "../../constant";
import MakePost from "../post/make-post";

const CreatePostModal = ({ mode, isOpen, onClose, postDataEditMode }) => {
  const isCreateSuccess = useSelector((state) => state.post.createPost.success);
  const isEditSuccess = useSelector((state) => state.post.editPost.success);
  useEffect(() => {
    if (isCreateSuccess || isEditSuccess) onClose();
  }, [isCreateSuccess, onClose, isEditSuccess]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent py={0}>
        <ModalHeader
          textAlign="center"
          borderBottom="1px"
          borderBottomColor={COLOR_THEME.BORDER}
        >
          {mode === "edit" ? "Edit post" : "Create new post"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody py={0}>
          <MakePost postDataEditMode={postDataEditMode} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreatePostModal;
