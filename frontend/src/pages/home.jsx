import PostContainer from "@components/post/post-container";
import LayoutFull from "@layout/layout-full";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  TabIndicator,
  Avatar,
  Text,
  Box,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import CreatePostModal from "@components/modals/create";
import PostFollowing from "@components/post/post-from-user-following";
import { memo, useState } from "react";
import News from "@components/new/new";
import ChatFloat from "@components/chat-float/chat-float";

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userLogin = JSON.parse(localStorage.getItem("user"));
  return (
    <LayoutFull>
      <Tabs
        pt={2}
        variant="unstyled"
        position="relative"
        align="center"
        onChange={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>HOT🔥</Tab>
          <Tab>NEWS</Tab>
          <Tab>FOLLOWING</Tab>
        </TabList>
        <TabIndicator height="2px" bg="grassTeal" rounded="2px" mt="-1.5px" />
        <TabPanels>
          <TabPanel px={0}>
            <Box
              display="flex"
              alignItems="center"
              gap="2"
              py={4}
              rounded="20px"
              px={2}
              justifyContent="flex-start"
              bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.200")}
              onClick={onOpen}
            >
              <Avatar src={userLogin?.avatar} alt={userLogin?.displayName} />
              <Box
                textAlign={"left"}
                flex="1"
                height="40px"
                rounded="25px"
                px={4}
              >
                <Text
                  lineHeight={"40px"}
                  color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
                >
                  {userLogin?.displayName} let share your great moment to
                  everyone
                </Text>
                <CreatePostModal isOpen={isOpen} onClose={onClose} />
              </Box>
            </Box>
            <PostContainer />
          </TabPanel>
          <TabPanel>
            <News index={tabIndex} />
          </TabPanel>
          <TabPanel px={0}>
            <PostFollowing index={tabIndex} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <ChatFloat />
    </LayoutFull>
  );
};

export default memo(Home);
