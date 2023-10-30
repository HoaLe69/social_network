import WrapContent from "@components/common/wrap-content";
import {
  Flex,
  Avatar,
  Text,
  Heading,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

const CoversItem = ({ photoUrl, displayName, lastesMessage }) => {
  return (
    <Flex
      gap={"10px"}
      p={2}
      rounded="10px"
      align="center"
      cursor="pointer"
      _hover={{
        backgroundColor: `${useColorModeValue(
          "blackAlpha.200",
          "whiteAlpha.300",
        )}`,
      }}
    >
      <Avatar
        sx={{ width: "40px", height: "40px" }}
        src={photoUrl}
        alt={displayName}
      />
      <Box>
        <Heading as="h3" fontSize="md">
          {displayName}
        </Heading>
        <Text
          color={useColorModeValue("gray.500", "whiteAlpha.600")}
          fontSize="sm"
          noOfLines={1}
        >
          {lastesMessage}
        </Text>
      </Box>
    </Flex>
  );
};
const Converstation = () => {
  const data = [
    {
      photoUrl:
        "https://i.pinimg.com/236x/dc/cb/ee/dccbee93d3b5334a002e7e5aa9d89b5a.jpg",
      displayName: "My Nguyen",
      lastesMessage: "Hello , What's your name ??",
    },
  ];
  return (
    <WrapContent title="Message">
      {data.map((dt) => {
        return (
          <CoversItem
            key={dt.photoUrl}
            photoUrl={dt.photoUrl}
            displayName={dt.displayName}
            lastesMessage={dt.lastesMessage}
          />
        );
      })}
    </WrapContent>
  );
};

export default Converstation;
