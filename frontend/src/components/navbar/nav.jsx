import { Box, Container, useColorModeValue } from "@chakra-ui/react";

const Nav = ({ children, bottom, ...props }) => {
  return (
    <Box
      as="nav"
      position={"fixed"}
      bottom={bottom}
      zIndex={2}
      css={{ backdropFilter: "blur(10px)" }}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      w="full"
      {...props}
    >
      <Container maxW={"container.lg"}>{children}</Container>
    </Box>
  );
};
export default Nav;
