import {
  Box,
  Tooltip,
  Avatar,
  useColorModeValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
} from "@chakra-ui/react";
import { AiFillHeart, AiFillMessage } from "react-icons/ai";
import { BsPatchPlusFill } from "react-icons/bs";
import CreatePostModal from "../modals/create";
import ToggleThemeButton from "../theme-toggle-btn";
import { COLOR_THEME } from "../../constant";
import Notify from "../notify/notify";
import Conversation from "../conversation/conversation";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const MenuItemPc = ({ icon, onOpen }) => {
  return (
    <Box
      onClick={onOpen}
      cursor="pointer"
      rounded="full"
      fontSize={"22px"}
      bg={COLOR_THEME.BG_BUTTON}
      p={3}
    >
      {icon}
    </Box>
  );
};

const NavMenuPc = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display={{ base: "none", lg: "flex" }} alignItems="center" gap="10px">
      <Box>
        <MenuItemPc icon={<BsPatchPlusFill />} title="create" onOpen={onOpen} />
        <CreatePostModal isOpen={isOpen} onClose={onClose} />
      </Box>
      <Menu placement="auto">
        <Tooltip label="notification">
          <MenuButton _expanded={{ color: "grassTeal" }}>
            <MenuItemPc icon={<AiFillHeart />} title="notification" />
          </MenuButton>
        </Tooltip>
        <MenuList bg={COLOR_THEME.BG} maxH="60vh">
          <Notify />
        </MenuList>
      </Menu>
      <Menu placement="auto">
        <Tooltip label="message">
          <MenuButton _expanded={{ color: "grassTeal" }}>
            <MenuItemPc icon={<AiFillMessage />} title="message" />
          </MenuButton>
        </Tooltip>
        <MenuList bg={COLOR_THEME.BG} width={"lg"} maxH="60vh">
          <Box>
            <Conversation />
          </Box>
        </MenuList>
      </Menu>
      <Menu placement="auto">
        <Tooltip label="account">
          <MenuButton>
            <Avatar
              cursor="pointer"
              borderWidth={2}
              borderStyle="solid"
              borderColor={useColorModeValue("gray.500", "whiteAlpha.500")}
              size={"md"}
              src="https://i.pinimg.com/564x/20/94/7a/20947a0ec294a7aa90e2172914b5072d.jpg"
            />
          </MenuButton>
        </Tooltip>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>
              <Box as="span" fontSize="lg" mr={2}>
                <CgProfile />
              </Box>
              My Profile
            </MenuItem>
            <MenuItem>
              <Box as="span" fontSize="lg" mr={2}>
                <BiLogOut />
              </Box>
              Log out
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
      <ToggleThemeButton />
    </Box>
  );
};

export default NavMenuPc;
