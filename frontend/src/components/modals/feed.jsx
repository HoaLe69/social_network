import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import PostInfor from "@components/post/post-detail-infor";
import CommentWrap from "@components/post/comment";

const FeedModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDir="column"
          maxH="86vh"
          overflowY="overlay"
        >
          <PostInfor />
          <CommentWrap />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FeedModal;
