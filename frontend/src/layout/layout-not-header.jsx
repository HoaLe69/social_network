import NavBot from "@components/navbar/nav-bot";
import { Box, Container } from "@chakra-ui/react";

const LayoutNotHeader = ({ children, ...props }) => {
  return (
    <Box {...props}>
      <Container maxW={"container.lg"} pb={20}>
        {children}
      </Container>
      <NavBot />
    </Box>
  );
};

export default LayoutNotHeader;
