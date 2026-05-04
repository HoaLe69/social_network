import { useEffect, useRef } from 'react'
import { Box, Image } from '@chakra-ui/react'

const MediaPreview = ({ file, type }) => {
  const videoRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file)

    if (type == 'video' && videoRef.current) {
      videoRef.current.src = objectUrl
    } else if (type == 'image' && imageRef.current) {
      imageRef.current.src = objectUrl
    }
    return () => {
      URL.revokeObjectURL(objectUrl)
    }
  }, [file, type])

  if (type == 'video') {
    if (type == 'video')
      return (
        <Box width="100%" borderRadius="md" overflow="hidden">
          <video ref={videoRef} width="100%" controls playsInline preload="metadata" />
        </Box>
      )
    return (
      <Box width="100%" borderRadius="md" overflow="hidden">
        <video ref={videoRef} width="100%" controls playsInline preload="metadata">
          Your browser does support the video tag
        </video>
      </Box>
    )
  }
  return (
    <Box width="100%" maxH="400px" borderRadius="md" overflow="hidden">
      <Image ref={imageRef} width="100%" maxH="400px" objectFit="cover" alt="preview" />
    </Box>
  )
}

export default MediaPreview
