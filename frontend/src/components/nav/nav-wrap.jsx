import { Box, Container, useColorModeValue } from "@chakra-ui/react";

const NavWrap = ({ children, ...props }) => {
  return (
    <Box
      as="nav"
      position={"fixed"}
      zIndex={2}
      css={{ backdropFilter: "blur(10px)" }}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      w="full"
      {...props}
    >
      <Container maxW={"container.lg"} p={2}>
        {children}
      </Container>
    </Box>
  );
};
export default NavWrap;
