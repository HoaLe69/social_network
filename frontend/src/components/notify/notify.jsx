import WrapContent from "@components/common/wrap-content";
import { Text, Avatar, Button, Flex, Box } from "@chakra-ui/react";

const NotifyItem = ({ photoUrl, displayName }) => {
  return (
    <Flex p={1} align="center" gap="10px">
      <Avatar src={photoUrl} alt={displayName} />
      <Text flex={1}>
        <strong>{displayName} </strong>started follow you on Peguin hub
      </Text>
      <Button colorScheme="teal">Follow back</Button>
    </Flex>
  );
};
const Notify = () => {
  const data = [
    {
      photoUrl:
        "https://i.pinimg.com/236x/dc/cb/ee/dccbee93d3b5334a002e7e5aa9d89b5a.jpg",
      displayName: "My Nguyen",
    },
    {
      photoUrl:
        "https://i.pinimg.com/236x/dc/cb/ee/dccbee93d3b5334a002e7e5aa9d89b5a.jpg",
      displayName: "My Nguyen",
    },
  ];
  return (
    <WrapContent title="Notification">
      {data.map((dt) => {
        return (
          <NotifyItem
            photoUrl={dt.photoUrl}
            displayName={dt.displayName}
            key={dt.displayName}
          />
        );
      })}
    </WrapContent>
  );
};

export default Notify;
