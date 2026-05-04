import { Box, useDisclosure, Drawer, DrawerContent, DrawerBody, useColorModeValue } from '@chakra-ui/react'
import LayoutWithoutNav from '../layout/layout-without-nav'
import { useCallback } from 'react'
import Converstation from '@components/conversation/conversation'
import RoomConversation from '@components/conversation/room-conversation'
import NavTop from '../components/nav/nav-top'
import { COLOR_THEME } from '../constant'

const ChatPc = () => {
  const displayOnSmallScreen = { base: 'block', lg: 'none' }
  const displayOnLargeScreen = { base: 'none', lg: 'flex' }
  return (
    <>
      <ChatSmallScreen display={displayOnSmallScreen} />
      <ChatLargeScreen display={displayOnLargeScreen} />
    </>
  )
}

const ChatSmallScreen = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onPressMobile = useCallback(() => {
    onOpen()
  }, [])

  const onPressMobileBackToChatList = useCallback(() => {
    onClose()
  }, [])

  const bgChat = useColorModeValue('#f0e7db', '#202023')

  return (
    <LayoutWithoutNav {...props}>
      <Converstation onPressMobile={onPressMobile} />
      <Drawer onClose={onClose} isOpen={isOpen} size={'full'}>
        <DrawerContent>
          <DrawerBody bg={bgChat} p={0} w="100vw" h="100vh" overflow="hidden">
            <RoomConversation onPressMobileBackToChatList={onPressMobileBackToChatList} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </LayoutWithoutNav>
  )
}

const ChatLargeScreen = ({ ...props }) => (
  <Box display="flex" flexDir="column" justifyContent="flex-end" height="100vh" {...props}>
    <NavTop isFixed={true} />
    <Box display="flex" flex={1} overflow="hidden">
      <Box borderRightWidth={1} flex={1} borderColor={COLOR_THEME.BORDER}>
        <Converstation />
      </Box>
      <Box flex={3}>
        <RoomConversation />
      </Box>
    </Box>
  </Box>
)

export default ChatPc
