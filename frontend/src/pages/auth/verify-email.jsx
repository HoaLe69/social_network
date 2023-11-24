import { Box, Heading, Image, Text } from "@chakra-ui/react";
import images from "../../assets";

const VerifyEmail = ({ email }) => {
  return (
    <Box display="flex" flexDir="column" gap="30px" alignItems="center">
      <Image
        src={images.email}
        alt="email verification"
        boxSize="100px"
        rounded="full"
        objectFit="cover"
      />
      <Heading>Verify your email</Heading>
      <Text textAlign="center">
        To continue using Penguin app, please verify your email address
      </Text>
      <Text>
        <strong>{email}</strong>
      </Text>
    </Box>
  );
};

export default VerifyEmail;
