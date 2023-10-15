import { Box, Heading, Container } from "@chakra-ui/react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import Nav from "./nav";
import Logo from "./logo";
import ToggleThemeButton from "../theme-toggle-btn";

const NavBar = () => {
  return (
    <Nav>
      <Logo />
      <ToggleThemeButton />
    </Nav>
  );
};

export default NavBar;
