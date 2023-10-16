import { Flex, IconButton, Box } from "@chakra-ui/react";
import NavContainer from "./nav-container";
import Logo from "./logo";
import { useColorModeValue } from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

const NavBar = () => {
  return (
    <NavContainer>
      <Flex justify="space-between">
        <Logo />
        <Box>
          <IconButton
            fontSize={"20px"}
            isRound={true}
            icon={<AiOutlineHeart />}
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          />
          <IconButton
            fontSize={"20px"}
            isRound={true}
            ml={2}
            icon={<AiOutlineMessage />}
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          />
        </Box>
      </Flex>
    </NavContainer>
  );
};

export default NavBar;
