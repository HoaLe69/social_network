import { useCallback, useState } from 'react'
import { Box, Button, Icon, Text, Flex, Container, VStack, useToast, useColorModeValue } from '@chakra-ui/react'
import UploadIcon from '../icons/Upload'
import MediaPreview from './media-preview'

const isValidMediaFile = file => {
  const validVideoTypes = ['video/mp4', 'video/webm', 'video/ogg']

  const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']

  if (validVideoTypes.includes(file.type)) {
    return { isValid: true, type: 'video' }
  }

  if (validImageTypes.includes(file.type)) {
    return { isValid: true, type: 'image' }
  }

  return { isValid: false, type: null }
}

const MediaUpload = ({ isEditMode, uploadState, onUploadState }) => {
  const [isDragging, setIsDragging] = useState(false)
  // const [uploadState, setUploadState] = useState({ file: null, type: null })
  const toast = useToast()

  const handleDrop = useCallback(e => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    handleFileSelection(droppedFile)
  }, [])

  const handleFileSelection = useCallback(selectedFile => {
    const { isValid, type } = isValidMediaFile(selectedFile)

    if (!isValid) {
      toast({
        title: 'Invalid file type',
        description: 'Please upload a valid image (JPEG, PNG, GIF, WebP) or video file (MP4, WebM, OGG)',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
      return
    }
    const maxSize = type === 'video' ? 100 * 1024 * 1024 : 5 * 1024 * 1024 // 100MB for video, 5MB for images
    if (selectedFile.size > maxSize) {
      toast({
        title: 'File too large',
        description: `${type === 'video' ? 'Video' : 'Image'} must be less than ${type === 'video' ? '100MB' : '5MB'}`,
        status: 'error',
        duration: 5000,
        isClosable: true
      })
      return
    }

    onUploadState({ file: selectedFile, type })
  }, [])

  const clearFile = useCallback(() => {
    onUploadState({ file: null, type: null })
  }, [])

  return (
    <Container px={0} my="6" maxW="2xl" centerContent>
      <VStack
        width="100%"
        spacing={4}
        p={!isEditMode && 6}
        bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
        borderRadius="lg"
        boxShadow="md"
      >
        {!uploadState.file ? (
          !isEditMode && (
            <Box
              width="100%"
              border="2px"
              borderStyle="dashed"
              display={'flex'}
              flexDirection="column"
              alignItems="center"
              p={8}
              textAlign="center"
              cursor="pointer"
              bg={isDragging ? 'blue.500' : 'transparent'}
              transition="all 0.2s"
              borderColor={'gray.400'}
              _hover={{ opacity: '60%' }}
              onDragOver={e => {
                e.preventDefault()
                setIsDragging(true)
              }}
              onDragLeave={() => {
                setIsDragging(false)
              }}
              onDrop={handleDrop}
              onClick={() => document.getElementById('file-input')?.click()}
            >
              <Icon as={UploadIcon} w={12} h={12} md={4} color="blue.500" textAlign="center" />
              <Text fontSize="lg" fontWeight="medium" mb={2}>
                Drag and drop your file here
              </Text>
              <Text fontSize="sm" color="gray.500" mb={4}>
                Or click to select a file
              </Text>
              <Text fontSize="xs" fontWeight="gray.500">
                Supports images (JPEG, PNG, GIF, WebP) up to 5MB <br />
                and videos (MP4, WebM, OGG) up to 100MB
              </Text>
              <input
                id="file-input"
                type="file"
                hidden
                accept="image/*,video/*"
                onChange={e => {
                  const selectedFile = e.target?.files[0]
                  if (selectedFile) {
                    handleFileSelection(selectedFile)
                  }
                }}
              />
            </Box>
          )
        ) : (
          <VStack width="100%" spacing={4}>
            <Flex justify="space-between" align="center" width="100%">
              <Text fontWeight="medium">{uploadState.file.name}</Text>
              <Button size="sm" variant="ghost" onClick={clearFile}>
                ✕
              </Button>
            </Flex>

            <Box width="100%">
              <MediaPreview file={uploadState.file} type={uploadState.type} />
            </Box>
          </VStack>
        )}
      </VStack>
    </Container>
  )
}

export default MediaUpload
