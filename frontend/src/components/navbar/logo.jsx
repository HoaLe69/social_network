import { Link } from "react-router-dom";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { AiOutlineQq } from "react-icons/ai";

const LogoBox = styled.div`
  font-weight: bold;
  font-size: 25px;
  display: inline-flex;
  align-items: center;
  padding: 10px;
`;

const Logo = () => {
  return (
    <Link to={"/"}>
      <LogoBox>
        <AiOutlineQq />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontWeight={"bold"}
          ml={3}
        >
          Penguin
        </Text>
      </LogoBox>
    </Link>
  );
};
export default Logo;
