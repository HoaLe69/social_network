import { Box, Container } from "@chakra-ui/react";

const LayoutWithoutNav = ({ children }) => {
  return (
    <Box>
      <Container maxW="container.lg" pb={2}>
        {children}
      </Container>
    </Box>
  );
};

export default LayoutWithoutNav;
