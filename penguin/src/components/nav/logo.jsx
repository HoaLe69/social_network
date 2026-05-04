import { Link as ReactRouterLink } from 'react-router-dom'
import { Text, Link, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { AiOutlineQq } from 'react-icons/ai'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  padding: 10px 0;
  line-height: 20px;
`

const Logo = ({ onClick, ...props }) => {
  return (
    <Link as={ReactRouterLink} to={'/'} {...props}>
      <LogoBox onClick={onClick}>
        <AiOutlineQq />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontWeight={'bold'}
          ml={1}
          fontFamily={`'M PLUS Rounded 1c' , san-serif`}
        >
          Testing
        </Text>
      </LogoBox>
    </Link>
  )
}
export default Logo
