import NavBar from "../components/navbar/navbar";
import NavBot from "../components/navbar/nav-bot";
import { Box } from "@chakra-ui/react";

const LayoutFull = ({ children }) => {
  return (
    <Box>
      <NavBar />
      {children}
      <NavBot />
    </Box>
  );
};

export default LayoutFull;
