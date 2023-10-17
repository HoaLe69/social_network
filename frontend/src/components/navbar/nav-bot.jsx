import { Flex, useColorModeValue, Text } from "@chakra-ui/react";
import NavContainer from "./nav-container";
import ToggleThemeButton from "../theme-toggle-btn";
import { GoHomeFill, GoHome, GoSearch } from "react-icons/go";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import {
  BsFillPersonFill,
  BsFillPatchPlusFill,
  BsPerson,
  BsPatchPlus,
} from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const MenuItem = ({ activeIcon, icon, href, title, subpath, ...props }) => {
  const { pathname } = useLocation();
  const active = href === pathname || !!subpath;
  console.log(subpath);
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      fontSize={title ? "25px" : "30px"}
      borderTop="2px"
      borderTopColor={active ? "grassTeal" : "transparent"}
      color={active ? "grassTeal" : inactiveColor}
      as={ReactRouterLink}
      to={href}
      p={2}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      _hover={{ textDecoration: "none" }}
      {...props}
    >
      {active ? activeIcon : icon}
      {title && (
        <Text
          as="p"
          fontSize={"12px"}
          fontFamily={`'M PLUS Rounded 1c' , san-serif`}
        >
          {title}
        </Text>
      )}
    </Link>
  );
};

const NavBot = () => {
  const menu = [
    {
      icon: <GoHome />,
      href: "/",
      activeIcon: <GoHomeFill />,
      title: "Home",
      subpath: "post",
    },
    {
      icon: <GoSearch />,
      href: "/explore",
      activeIcon: <FaSearch />,
      title: "Search",
    },
    {
      icon: <BsPatchPlus />,
      href: "/post",
      activeIcon: <BsFillPatchPlusFill />,
    },

    {
      icon: <BsPerson />,
      href: "/profile",
      activeIcon: <BsFillPersonFill />,
      title: "Profile",
    },
  ];
  return (
    <NavContainer bottom={0}>
      <Flex align="center" justify="space-evenly">
        {menu.map((item) => {
          return (
            <MenuItem
              key={item.href}
              subpath={item.subpath}
              activeIcon={item.activeIcon}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          );
        })}
        <ToggleThemeButton />
      </Flex>
    </NavContainer>
  );
};

export default NavBot;
