import NavTop from "@components/nav/nav-top";
import NavBot from "@components/nav/nav-bot";
import { Box, Container } from "@chakra-ui/react";
import ChatFloat from "@components/chat-float/chat-float";

const LayoutFull = ({ children }) => {
  return (
    <Box overflow="hidden" height="100vh" overflowY="overlay">
      <NavTop />
      <Container maxW={"container.sm"} px={0} pt={14} pb={20}>
        {children}
      </Container>
      <ChatFloat />
      <NavBot />
    </Box>
  );
};

export default LayoutFull;
