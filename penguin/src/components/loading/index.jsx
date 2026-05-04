import { SkeletonCircle, Box, Grid, GridItem, Skeleton, HStack, SkeletonText, VStack } from '@chakra-ui/react'

export const PostSkeletonLoading = () => {
  return (
    <VStack alignItems="start" maxW="640px" maxH="800px" w="full">
      <HStack>
        <SkeletonCircle size="10" />
        <SkeletonText noOfLines={2} skeletonHeight="2" width="100px" />
      </HStack>
      <Skeleton width="inherit" height="inherit" pt="100%" rounded="10px"></Skeleton>
    </VStack>
  )
}

export const ProfilePostSkeletonLoading = () => {
  const PROFILE_POST = [1, 2, 3]
  return (
    <Grid
      templateColumns={{
        base: 'repeat(2, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3 , 1fr)',
        lg: 'repeat(3 , 1fr) '
      }}
      gap={2}
      pt={4}
    >
      {PROFILE_POST.map(data => {
        return (
          <GridItem key={data}>
            <Skeleton height={{ base: '300px', lg: '400px' }} />
          </GridItem>
        )
      })}
    </Grid>
  )
}

export const ProfileHeaderSkeletonLoading = () => {
  return (
    <Box display="flex" alignItems="center" flexDir={{ base: 'column', lg: 'row' }} justifyContent="center">
      <Box width="300px" display="flex" justifyContent="center">
        <SkeletonCircle size="2xl" borderWidth="2px" borderStyle="solid" boxSize="150px" />
      </Box>
      <Box mt={{ base: '4' }} display="flex" flexDir="column" alignItems="start" minW="300px">
        <SkeletonText skeletonHeight="6" w="full" noOfLines={1} />
        <SkeletonText noOfLines={2} skeletonHeight="2" w="70%" mt="6" />
      </Box>
    </Box>
  )
}
