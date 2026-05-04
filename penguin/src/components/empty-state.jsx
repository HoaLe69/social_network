import { Box, Heading, Image } from '@chakra-ui/react'
import images from '../assets'

const EmptyState = ({ title }) => {
  return (
    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" w="100%">
      <Image src={images.emptyRoom} alt="penguin" />
      <Heading>{title}</Heading>
    </Box>
  )
}

export default EmptyState
