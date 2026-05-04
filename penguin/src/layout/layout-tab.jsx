import LayoutFull from './layout-full'
import { Box, Text } from '@chakra-ui/react'
import { useLocation, Link } from 'react-router-dom'
const TabItems = ({ title, path }) => {
  const { pathname } = useLocation()
  const active = pathname === path
  return (
    <Link to={`${path}`}>
      <Box
        p={2}
        fontWeight="bold"
        fontFamily={`'M PLUS Rounded 1c' , san-serif`}
        borderBottomWidth="3px"
        cursor="pointer"
        borderBottomColor={active ? 'grassTeal' : 'transparent'}
      >
        <Text>{title}</Text>
      </Box>
    </Link>
  )
}
const LayoutTab = ({ children }) => {
  const tabs = [
    { path: '/', title: 'HOT🔥' },
    { path: '/news', title: 'NEWS' },
    { path: '/following', title: 'FOLLOWING' }
  ]
  return (
    <LayoutFull>
      <Box pt={2} display="flex" alignItems="center" justifyContent="center">
        {tabs.map(tab => {
          return <TabItems key={tab.title} path={tab.path} title={tab.title} />
        })}
      </Box>
      {children}
    </LayoutFull>
  )
}

export default LayoutTab
