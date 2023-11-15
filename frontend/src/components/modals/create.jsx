import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import MakePost from "../post/make-post";

const CreatePostModal = ({ isOpen, onClose }) => {
  const isCreateSuccess = useSelector((state) => state.post.createPost.success);
  useEffect(() => {
    if (isCreateSuccess) onClose();
  }, [isCreateSuccess, onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <MakePost />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreatePostModal;
