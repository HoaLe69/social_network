import { Box, Container } from '@chakra-ui/react'

const LayoutWithoutNav = ({ children, ...props }) => {
  return (
    <Box overflow="hidden" height="100vh" overflowY="overlay" {...props}>
      <Container maxW="container.lg" pb={2}>
        {children}
      </Container>
    </Box>
  )
}

export default LayoutWithoutNav
