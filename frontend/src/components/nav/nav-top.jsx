import { Flex, IconButton, Box, Link } from "@chakra-ui/react";
import NavWrap from "./nav-wrap";
import Logo from "./logo";
import { useColorModeValue } from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { Link as ReactRouterLink } from "react-router-dom";
import NavMenuPc from "./nav-menu-items-pc";
import route from "@config/route";

const NavTop = () => {
  return (
    <NavWrap>
      <Flex justify="space-between">
        <Logo />
        <Box display={{ lg: "none" }}>
          <Link to={route.notifi} as={ReactRouterLink}>
            <IconButton
              fontSize={"20px"}
              isRound={true}
              icon={<AiOutlineHeart />}
              bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            />
          </Link>
          <Link to={route.message} as={ReactRouterLink}>
            <IconButton
              fontSize={"20px"}
              isRound={true}
              ml={2}
              icon={<AiOutlineMessage />}
              bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            />
          </Link>
        </Box>
        <NavMenuPc />
      </Flex>
    </NavWrap>
  );
};

export default NavTop;
