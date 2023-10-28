import NavBot from "@components/nav/nav-bot";
import { Box, Container } from "@chakra-ui/react";

const LayoutNotHeader = ({ children, ...props }) => {
  return (
    <Box {...props} overflow="hidden" height="100vh" overflowY="overlay">
      <Container maxW={"container.sm"} pb={20} px={0}>
        {children}
      </Container>
      <NavBot />
    </Box>
  );
};

export default LayoutNotHeader;
