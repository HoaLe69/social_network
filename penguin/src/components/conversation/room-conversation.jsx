import { Box, Text, Flex, Avatar, Heading, useColorModeValue, Spinner } from '@chakra-ui/react'
import { AiOutlineLeft } from 'react-icons/ai'
import { COLOR_THEME } from '../../constant'
import { useSelector } from 'react-redux'
import EmptyRoom from './room-empty'
import Message from './message'
import { useStompClient } from '../../hooks/useWebSocket'
import { useEffect, useRef, useState, useCallback } from 'react'
import InputRoomChat from './input-mess'
import axiosClient from '../../config/axios'

const RoomConversation = ({ onPressMobileBackToChatList }) => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const refDiv = useRef(null)

  const selectedRoom = useSelector(state => state.room.selectedRoom.info)
  const receiver = useSelector(state => state.room.selectedRoom.receiver)

  const handleIncomingMessage = useCallback(message => {
    setMessages(pre => [...pre, message.body])
  }, [])

  const { sendMessage } = useStompClient('/topic/messages', selectedRoom?.id, handleIncomingMessage)

  const bgHeader = useColorModeValue('#ffffff40', '#20202380')

  useEffect(() => {
    if (refDiv.current) refDiv.current.scrollTop = refDiv.current.scrollHeight
  }, [messages])

  useEffect(() => {
    const loadMessageHistory = async () => {
      setLoading(true)
      try {
        const res = await axiosClient.get(`/message/all/${selectedRoom?.id}`)
        setMessages(res)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    if (selectedRoom?.id) loadMessageHistory()
  }, [selectedRoom])

  return (
    <>
      {selectedRoom ? (
        <Box display="flex" h="full" flexDir="column">
          <Flex
            as="header"
            gap="10px"
            align="center"
            borderBottomWidth={1}
            borderColor={COLOR_THEME.BORDER}
            py={2}
            css={{ backdropFilter: 'blur(10px)' }}
            bg={bgHeader}
          >
            <Box onClick={onPressMobileBackToChatList} display={{ lg: 'none', base: 'block' }}>
              <Box fontSize="20px">
                <AiOutlineLeft />
              </Box>
            </Box>
            <Avatar ml={2} src={receiver?.avatar} size="sm" alt={receiver?.displayName} />
            <Heading as="h3" fontSize="16px">
              {receiver?.displayName}
            </Heading>
          </Flex>
          <Box flex="1" display="flex" flexDir="column" overflowY="auto" overflowX="hidden" p={2} ref={refDiv}>
            <Box display="flex" flexDir="column" alignItems="center" mb={20}>
              <Avatar src={receiver?.avatar} size="xl" alt={receiver?.displayName} />
              <Text color="gray.500">Let chat with {receiver?.displayName}</Text>
            </Box>
            <Box pb={12}>
              {loading ? (
                <Box display="flex" alignItems="center" justifyContent="center" minH="100px">
                  <Spinner />
                </Box>
              ) : (
                messages.map((message, index) => {
                  return (
                    <Message
                      roomId={selectedRoom?.id}
                      key={index}
                      receiver={receiver}
                      avatar={receiver?.avatar}
                      {...message}
                    />
                  )
                })
              )}
            </Box>
          </Box>
          <InputRoomChat roomId={selectedRoom.id} sendMessage={sendMessage} />
        </Box>
      ) : (
        <EmptyRoom />
      )}
    </>
  )
}

export default RoomConversation
