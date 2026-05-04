import {
  Flex,
  IconButton,
  Box,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  InputRightElement,
  Spinner,
  Avatar,
  Heading,
  HStack
} from '@chakra-ui/react'
import NavWrap from './nav-wrap'
import Logo from './logo'
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai'
import { Link as ReactRouterLink } from 'react-router-dom'
import NavMenuPc from './nav-menu-items-pc'
import route from '@config/route'
import { BiSearchAlt } from 'react-icons/bi'
import { useCallback, useEffect, useRef, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { IoMdClose } from 'react-icons/io'
import axiosClient from '../../config/axios'
import { useSelector } from 'react-redux'
import useClickOutside from '../../hooks/useClickOutside'
import { refreshEvents } from '../../hooks/useRefreshable'
import { useLocation } from 'react-router-dom'
import { GoSearch } from 'react-icons/go'

const PopResult = ({ result, isOpen, handleClosePopResult, userLoginId }) => {
  const refContainer = useRef(null)
  const bgHover = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const users = result.filter(user => user.id !== userLoginId) || []

  return (
    <Box
      ref={refContainer}
      display={isOpen ? 'block' : 'none'}
      p={1}
      rounded="10px"
      pos="absolute"
      right="0"
      left="0"
      top="110%"
      width="100%"
      bg={useColorModeValue('#fff', '#2D3748')}
    >
      <Box display="flex" alignItems="center">
        <Heading fontSize="16px">Result</Heading>
        <IconButton onClick={handleClosePopResult} ml="auto" icon={<IoMdClose />} size="sm" rounded="full" />
      </Box>
      {users?.length === 0 ? (
        <Box p={1}>No search result</Box>
      ) : (
        <Box p={1}>
          {users?.map(user => {
            return (
              <Link _hover={{ textDecoration: 'none' }} key={user?.id} as={ReactRouterLink} to={`/profile/${user?.id}`}>
                <Flex
                  alignItems="center"
                  gap="2"
                  py={1}
                  px={2}
                  rounded="10px"
                  _hover={{
                    backgroundColor: bgHover
                  }}
                >
                  <Avatar src={user?.avatar} alt={user?.displayName} size="sm" />
                  <Heading fontSize="13px">{user?.displayName}</Heading>
                </Flex>
              </Link>
            )
          })}
        </Box>
      )}
    </Box>
  )
}

const NavTop = ({ isFixed }) => {
  const [visibleSearchOnMobileScreen, setVisibleSearchOnMobileScreen] = useState(false)
  const [search, setSearchValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshsing] = useState(false)
  const [result, setResult] = useState([])
  const [visibleResult, setVisibleResult] = useState(false)
  const debounceValue = useDebounce(search)
  const userLogin = useSelector(state => state.auth.authState.user)
  const { pathname } = useLocation()

  const refInputContainer = useRef(null)

  useEffect(() => {
    if (!debounceValue.trim()) {
      setLoading(false)
      return
    }
    setLoading(true)
    const getSearchResult = async () => {
      try {
        setLoading(true)
        const res = await axiosClient.get(`/user/search?email=${debounceValue}`)
        if (res) {
          setResult(res)
          setVisibleResult(true)
        }
      } catch (err) {
        setLoading(false)
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    getSearchResult()
  }, [debounceValue])

  const handleOnChange = e => {
    setSearchValue(e.target.value)
  }

  const bgLoadingPost = useColorModeValue('#f0e7db', '#202023')
  const handleRefreshPost = useCallback(async () => {
    if (pathname !== '/') return
    setRefreshsing(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setRefreshsing(false)

    refreshEvents.emit('refresh:posts')
  }, [])

  const handlePressSearch = useCallback(() => {
    setVisibleSearchOnMobileScreen(true)
  }, [])

  const handleClosePopResult = useCallback(() => {
    setVisibleResult(false)
    setVisibleSearchOnMobileScreen(false)
    setSearchValue('')
  }, [])

  useClickOutside(refInputContainer, handleClosePopResult)

  return (
    <NavWrap isFixed={isFixed}>
      <Box
        shadow="dark-lg"
        display={refreshing ? 'flex' : 'none'}
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top="120%"
        left="50%"
        translateX="-50%"
        bg={bgLoadingPost}
        width="12"
        height="12"
        borderRadius="full"
      >
        <Spinner color="teal.500" />
      </Box>
      <Flex justify="space-between">
        <Logo onClick={handleRefreshPost} display={{ base: visibleSearchOnMobileScreen && 'none', lg: 'block' }} />
        <HStack flex={1} justifyContent="center" px="2">
          <InputGroup
            ref={refInputContainer}
            position="relative"
            display={{ base: visibleSearchOnMobileScreen ? 'flex' : 'none', lg: 'flex' }}
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
            rounded="20px"
            maxW="300px"
          >
            <InputLeftElement pointerEvents="none">
              <BiSearchAlt />
            </InputLeftElement>
            <Input
              placeholder="Search"
              rounded="20px"
              focusBorderColor="whiteAlpha.300"
              value={search}
              onChange={handleOnChange}
            />
            {loading && (
              <InputRightElement>
                <Spinner />
              </InputRightElement>
            )}
            <PopResult
              handleClosePopResult={handleClosePopResult}
              userLoginId={userLogin?.id}
              result={result}
              isOpen={visibleResult}
            />
          </InputGroup>
        </HStack>

        <Box display={{ lg: 'none' }}>
          <IconButton
            onClick={handlePressSearch}
            fontSize={'20px'}
            isRound={true}
            icon={<GoSearch />}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          />
          <Link as={ReactRouterLink} to={route.chat}>
            <IconButton
              fontSize={'20px'}
              isRound={true}
              ml={2}
              icon={<AiOutlineMessage />}
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            />
          </Link>
        </Box>
        <NavMenuPc />
      </Flex>
    </NavWrap>
  )
}

export default NavTop
