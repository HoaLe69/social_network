import NavBar from "../components/navbar/navbar";
import NavBot from "../components/navbar/nav-bot";
import { Box, Container } from "@chakra-ui/react";

const LayoutFull = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Container maxW={"container.lg"} pt={14} pb={20}>
        {children}
      </Container>
      <NavBot />
    </Box>
  );
};

export default LayoutFull;
