import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader, Box } from '@chakra-ui/react'
import Comment from '../post/comment'
import Post from '../post/post-item'
import { COLOR_THEME } from '../../constant'

const FeedModal = ({ isOpen, onClose, postInfo, ...postExtra }) => {
  return (
    <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose} size={{ base: 'full', lg: '3xl' }}>
      <ModalOverlay />
      <ModalContent pb={2} px={0}>
        <ModalHeader textAlign="center" borderBottom="1px" borderBottomColor={COLOR_THEME.BORDER}>
          Bài Viết Của {postInfo?.displayName}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          paddingInlineStart={0}
          paddingInlineEnd={0}
          // display="flex"
          // flexDir="column"
          // maxH="75vh"
        >
          <Box>
            <Post {...postInfo} {...postExtra} isModal />
          </Box>
          <Comment
            handleGetAmountOfComment={postExtra.handleGetAmountOfComment}
            isOpen={isOpen}
            postId={postInfo?.id}
            ownerPostId={postInfo?.userId}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default FeedModal
