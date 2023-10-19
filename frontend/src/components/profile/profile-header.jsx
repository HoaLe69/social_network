import {
  Avatar,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const Details = ({ title, quantity, ...props }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      cursor="pointer"
      {...props}
    >
      <Text fontWeight="bold">{quantity}</Text>
      <Text
        fontSize="sm"
        color={useColorModeValue("gray.500", "whiteAlpha.500")}
      >
        {title}
      </Text>
    </Box>
  );
};

const ProfileHeader = () => {
  return (
    <Box pt={16}>
      <Box display="flex" alignItems="center" flexDir="column">
        <Avatar
          size="2xl"
          src="https://i.pinimg.com/564x/62/7b/bd/627bbdf8035164c3272f94900d5c4465.jpg"
          borderWidth="2px"
          borderStyle="solid"
          borderColor={useColorModeValue("gray.500", "whiteAlpha.500")}
        />
        <Heading as="h3" mt={2} fontSize="16px">
          Vwn_Hfo_691
        </Heading>
        <Box display="flex" gap="10px" mt={2} alignItems="center">
          <Details quantity={242} title="Follower" />
          <Box bg="whiteAlpha.500" w="1px" height="7"></Box>
          <Details quantity={12} title="Following" />
        </Box>
        <Box mt={2} gap="10px" display="flex">
          <Button colorScheme="teal">Edit profile</Button>
          <Button colorScheme="teal">Follow</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
