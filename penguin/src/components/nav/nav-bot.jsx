import { Flex, Link, useColorModeValue, Text, useDisclosure } from '@chakra-ui/react'
import NavWrap from './nav-wrap'
import ToggleThemeButton from '../theme-toggle-btn'
import { GoHomeFill, GoHome } from 'react-icons/go'
import { NavLink as ReactRouterLink, useLocation } from 'react-router-dom'
import { BsFillPersonFill, BsFillPatchPlusFill, BsPerson, BsPatchPlus } from 'react-icons/bs'
import route from '@config/route'
import { useSelector } from 'react-redux'
import CreatePostModal from '../modals/create'

const MenuItem = ({ activeIcon, icon, href, title, ...props }) => {
  const { pathname } = useLocation()
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const active = href === pathname
  return (
    <Link
      onClick={props.onClick}
      as={ReactRouterLink}
      fontSize={title ? '25px' : '30px'}
      color={active ? 'grassTeal' : inactiveColor}
      to={href}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      position="relative"
      _hover={{ textDecoration: 'none' }}
      _before={{
        top: '-10px',
        position: 'absolute',
        content: '""',
        width: '45px',
        borderRadius: '20px',
        height: '2px',
        display: 'inline-block',
        bg: `${active ? 'grassTeal' : 'transparent'}`
      }}
      {...props}
    >
      {active ? activeIcon : icon}
      {title && (
        <Text as="p" fontSize={'12px'} fontFamily={`'M PLUS Rounded 1c' , san-serif`}>
          {title}
        </Text>
      )}
    </Link>
  )
}

const NavBot = () => {
  const userLogin = useSelector(state => state.auth.authState.user)
  const { isOpen, onClose, onOpen } = useDisclosure()
  const menu = [
    {
      icon: <GoHome />,
      href: route.home,
      activeIcon: <GoHomeFill />,
      title: 'Home'
    },
    {
      icon: <BsPatchPlus />,
      href: route.makePost,
      activeIcon: <BsFillPatchPlusFill />,
      title: 'Create',
      onClick: onOpen
    },

    {
      icon: <BsPerson />,
      href: `/profile/${userLogin?.id}`,
      activeIcon: <BsFillPersonFill />,
      title: 'Profile'
    }
  ]
  return (
    <NavWrap bottom={0} display={{ lg: 'none' }}>
      <Flex align="center" justify="space-evenly">
        {menu?.map((item, index) => {
          return (
            <MenuItem
              key={index}
              activeIcon={item.activeIcon}
              icon={item.icon}
              href={item.href}
              title={item.title}
              onClick={item?.onClick}
            />
          )
        })}
        <ToggleThemeButton />
      </Flex>
      {isOpen && <CreatePostModal isOpen={isOpen} onClose={onClose} />}
    </NavWrap>
  )
}

export default NavBot
