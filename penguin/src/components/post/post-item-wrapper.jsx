import { Box, useToast, useDisclosure } from '@chakra-ui/react'
import Post from './post-item'
import FeedModal from '../modals/feed'
import { memo, useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { reactPost } from '../../redux/api-request/posts'

const PostItemWrapper = ({ ...postInfo }) => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const userLogin = useSelector(state => state.auth.authState.user)
  const [postReactionList, setPostReactionList] = useState(() => postInfo.like)
  const [amountOfComment, setAmountOfComment] = useState(() => postInfo.comments)

  const handleShowPostModal = useCallback(() => {
    onOpen()
  }, [])

  const handleGetAmountOfComment = useCallback(amount => {
    setAmountOfComment(amount)
  }, [])

  const isUserLoginLikeThisPost = useMemo(() => {
    return postReactionList?.includes(userLogin?.id)
  }, [postReactionList.length])

  const handleLeaveEmojiPost = useCallback(async () => {
    try {
      if (isUserLoginLikeThisPost) {
        setPostReactionList(pre => pre.filter(l => l !== userLogin?.id))
      } else {
        setPostReactionList(pre => [...pre, userLogin?.id])
      }
      //visualize delay time on production
      await reactPost(postInfo.id, userLogin?.id)
    } catch (error) {
      // run toast message here
      console.log(error)
      toast({
        title: 'Post',
        position: 'bottom-left',
        description: error.response.data || 'Something went wrong',
        status: 'info',
        duration: 1500,
        isClosable: true
      })
    }
  }, [userLogin, isUserLoginLikeThisPost])
  return (
    <Box>
      <Post
        {...postInfo}
        amountOfComment={amountOfComment}
        activeReactButton={isUserLoginLikeThisPost}
        postReactionList={postReactionList}
        handleReactPost={handleLeaveEmojiPost}
        handleShowPostModal={handleShowPostModal}
      />
      {isOpen && (
        <FeedModal
          isOpen={isOpen}
          onClose={onClose}
          postInfo={postInfo}
          postReactionList={postReactionList}
          amountOfComment={amountOfComment}
          activeReactButton={isUserLoginLikeThisPost}
          handleReactPost={handleLeaveEmojiPost}
          handleGetAmountOfComment={handleGetAmountOfComment}
        />
      )}
    </Box>
  )
}

export default memo(PostItemWrapper)
