import { Flex, Link, Avatar, Heading, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const SearchResult = ({ id, photoUrl, displayName }) => {
  return (
    <Box p={2}>
      <Link
        as={ReactRouterLink}
        to={`/profile/${id}`}
        _hover={{ textDecoration: "none" }}
      >
        <Flex align="center" gap="5px">
          <Avatar src={photoUrl} alt={displayName} size="sm" />
          <Heading as="h3" fontSize="14px">
            {displayName}
          </Heading>
        </Flex>
      </Link>
    </Box>
  );
};

export default SearchResult;
