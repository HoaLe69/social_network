import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import PostInfor from "@components/post/post-detail-infor";
import Comment from "../post/comment";

const FeedModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent pb={2} px={0}>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDir="column"
          maxH="86vh"
          overflowY="overlay"
        >
          <PostInfor />
          <Comment isOpen={isOpen} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FeedModal;
