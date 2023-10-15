import { IconButton, Flex, Avatar, useColorModeValue } from "@chakra-ui/react";
import NavContainer from "./nav-container";
import ToggleThemeButton from "../theme-toggle-btn";
import { GoHomeFill, GoHome, GoSearch } from "react-icons/go";
import { ImSearch } from "react-icons/im";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import {
  BsFillPersonFill,
  BsFillPatchPlusFill,
  BsPerson,
  BsPatchPlus,
} from "react-icons/bs";

const NavBotItem = ({ activeIcon, icon, href, ...props }) => {
  const { pathname } = useLocation();
  const active = href === pathname;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      fontSize={"25px"}
      colorScheme={"transperant"}
      borderTop="2px"
      borderTopColor={active ? "grassTeal" : "transparent"}
      color={active ? "grassTeal" : inactiveColor}
      as={NavLink}
      to={href}
      p={2}
      {...props}
    >
      {active ? activeIcon : icon}
    </Link>
  );
};

const NavBot = () => {
  const NavList = [
    {
      icon: <GoHome />,
      href: "/",
      activeIcon: <GoHomeFill />,
    },
    {
      icon: <GoSearch />,
      href: "/explore",
      activeIcon: <ImSearch />,
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
    },
  ];
  return (
    <NavContainer bottom={0}>
      <Flex align="center" justify="space-evenly">
        {NavList.map((item) => {
          return (
            <NavBotItem
              key={item.href}
              activeIcon={item.activeIcon}
              icon={item.icon}
              href={item.href}
            />
          );
        })}
        <ToggleThemeButton />
      </Flex>
    </NavContainer>
  );
};

export default NavBot;
