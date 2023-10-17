import { Box, Link, Heading, Container, Wrap } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import route from "@config/route";

const WrapContent = ({ children, title }) => {
  return (
    <Box>
      <Box as="header" pt={2} display="flex" alignItems="center">
        <Link as={ReactRouterLink} to={route.home}>
          <Box mr={4} fontSize="20px">
            <AiOutlineLeft />
          </Box>
        </Link>
        <Heading fontSize="20px">{title}</Heading>
      </Box>
      <Box pt={2}>{children}</Box>
    </Box>
  );
};

export default WrapContent;
