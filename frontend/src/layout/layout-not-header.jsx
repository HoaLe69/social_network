import NavBot from "../components/navbar/nav-bot";
import { Box } from "@chakra-ui/react";

const LayoutNotHeader = ({ children, ...props }) => {
  return (
    <Box {...props}>
      {children}
      <NavBot />
    </Box>
  );
};

export default LayoutNotHeader;
